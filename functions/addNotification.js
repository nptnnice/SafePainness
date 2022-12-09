import db from '../db'

export default async function addNotification(
  senderID,
  receiverID,
  datetime,
  description,
  patientID,
  caseID,
  pageID,
  type
) {
  let result = await db.query(
    `INSERT INTO "public"."Notification" ("senderID", "receiverID", "datetime", "description", "patientID", "caseID", "pageID", "type") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [
      senderID,
      receiverID,
      datetime,
      description,
      patientID,
      caseID,
      pageID,
      type,
    ]
  )
  return result.rows[0]
}
