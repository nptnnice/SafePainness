import db from '../db'

export default async function addNotification(
  senderID,
  receiverID,
  datetime,
  description
) {
  let result = await db.query(
    `INSERT INTO "public"."Notification" ("senderID", "receiverID", "datetime", "description") VALUES ($1, $2, $3, $4)`,
    [senderID, receiverID, datetime, description]
  )
  return result.rows[0]
}
