import db from '../../../db'

export default async function handler(req, res) {
  const { patientID } = req.body
  let result = await db.query(
    `SELECT * FROM "public"."Case" LEFT JOIN "public"."Doctor" ON "Case"."doctorID" = "Doctor"."doctorID" WHERE "patientID"=$1`,
    [patientID]
  )
  res.json(result.rows)
}
