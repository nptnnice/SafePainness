import db from '../../../db'

export default async function handler(req, res) {
  const caseID = req.headers.caseid

  let result = await db.query(
    `SELECT * FROM "public"."Record" WHERE "caseID"=$1 ORDER BY "datetime" DESC`,
    [caseID]
  )
  res.json(result.rows)
}
