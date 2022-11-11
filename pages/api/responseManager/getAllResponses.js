import db from '../../../db'

export default async function handler(req, res) {
  const { feedbackID } = req.body
  let result = await db.query(
    `SELECT * FROM "public"."Response" WHERE "feedbackID"=$1`,
    ['810415858382635010']
  )
  res.json(result.rows)
}
