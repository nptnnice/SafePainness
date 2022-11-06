import db from '../../../db'

export default async function handler(req, res) {
  const { patientID } = req.body
  let result = await db.query(
    `SELECT * FROM "public"."Patient" WHERE "patientID"=$1`,
    [patientID]
  )
  res.json(result.rows)
}
