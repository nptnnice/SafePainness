import db from '/db'

export default async function handler(req, res) {
  const { password, userID } = req.body

  // find user in doctor table
  let doctor = await db.query(
    `SELECT "doctorID" FROM "public"."Doctor" WHERE "doctorID"=$1`,
    [userID]
  )

  // find user in patient table
  let patient = await db.query(
    `SELECT "patientID" FROM "public"."Patient" WHERE "patientID"=$1`,
    [userID]
  )

  if (doctor.rows.length == 1) {
    let result = await db.query(
      `UPDATE "public"."Doctor" SET "password"=$1 WHERE "doctorID"=$2 `,
      [password, userID]
    )
    res.json(result.rows[0])
  } else if (patient.rows.length == 1) {
    let result = await db.query(
      `UPDATE "public"."Patient" SET "password"=$1 WHERE "patientID"=$2 `,
      [password, userID]
    )
    res.json(result.rows[0])
  }
}
