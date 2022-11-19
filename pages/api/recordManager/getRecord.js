import db from '../../../db'

export default async function handler(req, res) {
  const { recordID } = req.body
  let result = await db.query(
    `SELECT * FROM "public"."Record" WHERE "recordID"=$1 `,
    [recordID]
  )
  res.json(result.rows)
}
