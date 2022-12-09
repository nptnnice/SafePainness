import db from '../../../db'

export default async function handler(req, res) {
  const caseID = req.headers.caseid
  let result = await db.query(
    `SELECT "painScale"::int8, "datetime" FROM "public"."Record" WHERE "caseID"=$1 LIMIT 10`,
    [caseID]
  )
  res.json(result.rows)
}
