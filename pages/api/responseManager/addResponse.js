import db from '../../../db'
import addNotification from '/functions/addNotification'

export default async function handler(req, res) {
  const {
    senderID,
    message,
    feedbackID,
    senderName,
    receiverID,
    patientID,
    caseID,
  } = req.body
  const datetime = new Date()

  let result = await db.query(
    `INSERT INTO "public"."Response"
    ("feedbackID", "datetime", "message", "senderID")
    VALUES ($1, $2, $3, $4)`,
    [feedbackID, datetime, message, senderID]
  )

  // add notification
  let notification = await addNotification(
    senderID,
    receiverID,
    datetime,
    `You have a new response from ${senderName}`,
    patientID,
    caseID,
    feedbackID,
    'response'
  )

  res.json(result.rows)
}
