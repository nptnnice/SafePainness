import db from '../../../db'

export default async function handler(req, res) {
  const feedbackID = req.headers.feedbackid

  let result = await db.query(
    `SELECT * FROM "public"."Response"
    LEFT JOIN (SELECT "doctorID" AS "userID", "firstName", "lastName" FROM "public"."Doctor"
    UNION SELECT "patientID" AS "userID", "firstName", "lastName" FROM "public"."Patient")
    ON "senderID" = "userID"
    WHERE "feedbackID"=$1
    ORDER BY "datetime" ASC`,
    [feedbackID]
  )
  res.json(result.rows)
}
