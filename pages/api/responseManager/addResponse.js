import db from '../../../db'

export default async function handler(req, res) {

  const { message, senderID } = req.body;
  const datetime = new Date();

  const feedbackID = '810415858382635010';

  let result = await db.query(
    `INSERT INTO "public"."Response"
    ("feedbackID", "datetime", "message", "senderID")
    VALUES ($1, $2, $3, $4)`,
    [feedbackID, datetime, message, senderID]
  )
  res.json(result.rows)
}
