import db from '../../../db'

export default async function handler(req, res) {
  const patientID = req.headers.patientid
  let result = await db.query(
    `SELECT * FROM "public"."Case" LEFT JOIN "public"."Doctor" ON "Case"."doctorID" = "Doctor"."doctorID" WHERE "patientID"=$1 ORDER BY "date" DESC`,
    [patientID]
  )
  res.json(result.rows)
}
