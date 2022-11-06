import db from '../../db'
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
  const { username, password } = req.body
  let user = await db.query(
    `SELECT "doctorID" AS "userID", "username", "password", "roleID", "image" FROM "public"."Doctor" WHERE "username"=$1 UNION SELECT "patientID" AS "userID", "username", "password", "roleID", "image" FROM "public"."Patient" WHERE "username"=$1`,
    [username]
  )
  // Check if user exist
  if (user.rows.length != 1) {
    res.send('User not found')
  } else {
    if (user.rows[0].password === password) {
      const token = jwt.sign(
        {
          userID: user.rows[0].userID,
          username: user.rows[0].username,
          roleID: user.rows[0].roleID,
        },
        'secret',
        { expiresIn: '6h' }
      )

      // hide password
      user.rows[0].password = undefined
      // get token
      user.rows[0].token = token
      res.json(user.rows[0])
    } else {
      res.send('Wrong password')
    }
  }
}
