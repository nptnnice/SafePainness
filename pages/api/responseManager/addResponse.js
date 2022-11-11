import db from '../../../db'

export default async function handler(req, res) {

  const message = req.body.message;
  const senderID = 'DT000001'
  const feedbackID = '810415858382635010';
  const datetime = new Date();
  

  let result = await db.query(
    `INSERT INTO "public"."Response"
    ("feedbackID", "datetime", "message", "senderID")
    VALUES ($1, $2, $3, $4)`,
    [feedbackID, datetime, message, senderID]
  )
  res.json(result.rows)
}
