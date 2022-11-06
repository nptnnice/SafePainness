import db from '../../../db'

export default async function handler(req, res) {
  const { feedbackID } = req.body
  let result = await db.query(
    `SELECT * FROM "public"."Response" WHERE "feedbackID"=$1`,
    [feedbackID]
  )
  res.json(result.rows)
}
