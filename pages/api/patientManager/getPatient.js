import db from '../../../db'

export default async function handler(req, res) {
  const patientID = req.headers.patientid

  let result = await db.query(
    `SELECT * FROM "public"."Patient" WHERE "patientID"=$1`,
    [patientID]
  )
  res.json(result.rows[0])
}
