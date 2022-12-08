import db from '../../../db'

export default async function handler(req, res) {
  const notificationID = req.body.notificationid
  let result = await db.query(
    `UPDATE "public"."Notification" SET "status" = 'FALSE' WHERE "notificationID" = $1`,
    [notificationID]
  )
  res.json(result.rows[0])
}
