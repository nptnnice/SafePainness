import db from '../../../db'

export default async function handler(req, res) {
  const recordID  = req.headers.recordid
  let result = await db.query(
    `SELECT * FROM "public"."Record" WHERE "recordID"=$1 ORDER BY "recordID" DESC`,
    [recordID]
  )
  res.json(result.rows)
}
