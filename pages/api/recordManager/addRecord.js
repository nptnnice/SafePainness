import db from '../../../db'

export default async function handler(req, res) {
  const { caseID, datetime, symptom, painScale, comment, image } = req.body
  let result = await db.query(
    `INSERT INTO "public"."Record"
    ("caseID", "datetime", "symptom", "painScale", "comment", "image")
    VALUES ($1, $2, $3, $4, $5, $6)`,
    [caseID, datetime, symptom, painScale, comment, image]
  )
  res.json(result.rows)
}
