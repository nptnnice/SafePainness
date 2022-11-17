import db from '../../../db'

export default async function handler(req, res) {
  const { doctorID, patientID, date } = req.body
  let result = await db.query(
    `INSERT INTO "public"."Case" ("doctorID", "patientID", "date") VALUES ($1, $2, $3)`,
    [doctorID, patientID, date]
  )
  res.json(result.rows)
}
