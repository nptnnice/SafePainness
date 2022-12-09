import db from '../../../db'

export default async function handler(req, res) {
  const caseID = req.headers.caseid
  let result = await db.query(
    `SELECT "painScale", "datetime"::TIMESTAMP::DATE FROM "public"."Record" WHERE "caseID"=$1`,
    [caseID]
  )
  res.json(result.rows)
}
