import db from '../../../db'

export default async function handler(req, res) {
  const { caseID } = req.body

  let result = await db.query(
    `SELECT * FROM "public"."Record" WHERE "caseID"=$1 ORDER BY "datetime" DESC`,
    ["2022-000003"]
  )
  res.json(result.rows)
}
