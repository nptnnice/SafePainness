import db from '../../db'
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
  const { username, password } = req.body
  let user = await db.query(
    `SELECT "doctorID" AS "id", "username", "password", "roleID" FROM "public"."Doctor" WHERE "username"=$1 UNION SELECT "patientID" AS "id", "username", "password", "roleID" FROM "public"."Patient" WHERE "username"=$1`,
    [username]
  )
  if (user.rows.length != 1) {
    res.send('User not found')
  } else {
    if (user.rows[0].password === password) {
      const token = jwt.sign(
        {
          id: user.rows[0].id,
          username: user.rows[0].username,
          roleID: user.rows[0].roleID,
        },
        'secret',
        { expiresIn: '6h' }
      )
      user.rows[0].token = token
      res.json(user.rows[0])
    } else {
      res.send('Incorrect password')
    }
  }
}
