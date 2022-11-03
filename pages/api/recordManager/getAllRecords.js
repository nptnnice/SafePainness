import db from '../../../db'

export default async function handler(req, res) {
  const { caseID } = req.body
  let result = await db.query(
    `SELECT * FROM "public"."Record" WHERE "caseID"=$1`,
    [caseID]
  )
  res.json(result.rows)
}
