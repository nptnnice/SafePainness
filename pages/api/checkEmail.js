import db from '../../db'

export default async function handler(req, res) {
  const { email } = req.body
  let result = await db.query(
    `SELECT "email", "doctorID" AS "userID", "roleID" FROM "public"."Doctor" WHERE "email"=$1 UNION SELECT "email", "patientID" AS "userID", "roleID" FROM "public"."Patient" WHERE "email"=$1`,
    [email]
  )

  if (result.rows.length != 1) {
    res.send('Email not found')
  } else {
    res.send('Email already exist')
    res.json(result.rows)
  }
}
