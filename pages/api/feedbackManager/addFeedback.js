import db from '../../../db'
import addNotification from '/functions/addNotification'

export default async function handler(req, res) {
  const { caseID, message, senderID, receiverID, senderName, patientID } =
    req.body
  const datetime = new Date()

  let result = await db.query(
    `INSERT INTO "public"."Feedback"
    ("caseID", "datetime", "message")
    VALUES ($1, $2, $3)`,
    [caseID, datetime, message]
  )

  // get the feedbackID after insert
  let feedback = await db.query(
    `SELECT "feedbackID" FROM "public"."Feedback" WHERE "caseID" = $1 AND "datetime" = $2`,
    [caseID, datetime]
  )
  let feedbackID = feedback.rows[0].feedbackID
  // add notification
  let notification = await addNotification(
    senderID,
    receiverID,
    datetime,
    `You have received a new feedback from ${senderName}`,
    patientID,
    caseID,
    feedbackID,
    'feedback'
  )

  res.json(result.rows)
}
