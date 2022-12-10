import db from '/db'

export default async function handler(req, res) {
  const email = req.headers.email

  let result = await db.query(
    `SELECT "email", "doctorID" AS "userID", "role" FROM "public"."Doctor" WHERE "email"=$1 UNION SELECT "email", "patientID" AS "userID", "role" FROM "public"."Patient" WHERE "email"=$1`,
    [email]
  )

  if (result.rows.length == 1) {
    res.json(result.rows[0])
  } else {
    res.send('Email not found')
  }
}
