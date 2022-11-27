import db from '../../../db'

export default async function handler(req, res) {
  const caseID = req.headers.caseid
  let result = await db.query(
    `SELECT * FROM "public"."Case" LEFT JOIN "public"."Doctor" ON "Case"."doctorID" = "Doctor"."doctorID" WHERE "caseID"=$1`,
    [caseID]
  )
  res.json(result.rows[0])
}
