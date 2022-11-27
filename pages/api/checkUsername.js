import db from '../../db'

export default async function handler(req, res) {
  const { username } = req.body
  let result = await db.query(
    `SELECT "username" FROM "public"."Doctor" WHERE "username"=$1 UNION SELECT "username" FROM "public"."Patient" WHERE "username"=$1`,
    [username]
  )
  // Check if user exist
  if (result.rows.length != 1) {
    res.send('User Available')
  } else {
    res.send('User already exist')
  }
}
