import db from '../../../db'

export default async function handler(req, res) {
  const { doctorID } = req.body
  let result = await db.query(
    `SELECT * FROM "public"."Case" LEFT JOIN "public"."Patient" ON "Case"."patientID" = "Patient"."patientID" WHERE "doctorID" = $1`,
    [doctorID]
  )
  res.json(result.rows)
}
