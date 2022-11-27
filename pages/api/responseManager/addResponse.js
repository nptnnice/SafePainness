import db from '../../../db'

export default async function handler(req, res) {
  const { senderID, message, datetime, feedbackID } = req.body

  let result = await db.query(
    `INSERT INTO "public"."Response"
    ("feedbackID", "datetime", "message", "senderID")
    VALUES ($1, $2, $3, $4)`,
    [feedbackID, datetime, message, senderID]
  )
  res.json(result.rows)
}
