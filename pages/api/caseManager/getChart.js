import db from '../../../db'

export default async function handler(req, res) {
  const caseID = req.headers.caseid
  let result = await db.query(
    `SELECT * FROM (
      SELECT "painScale"::int8, "datetime" FROM "public"."Record" WHERE "caseID"=$1 ORDER BY "datetime" DESC LIMIT 10
    ) subquery ORDER BY "datetime" ASC`,
    [caseID]
  )
  res.json(result.rows)
}
