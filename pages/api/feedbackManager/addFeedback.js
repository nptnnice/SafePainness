import db from '../../../db'
import addNotification from '/functions/addNotification'

export default async function handler(req, res) {
  const { caseID, message, datetime, senderID, receiverID, senderName } =
    req.body

  let result = await db.query(
    `INSERT INTO "public"."Feedback"
    ("caseID", "datetime", "message")
    VALUES ($1, $2, $3)`,
    [caseID, datetime, message]
  )

  let notification = await addNotification(
    senderID,
    receiverID,
    datetime,
    `You have received a new feedback from ${senderName}`
  )
  res.json(result.rows)
}
