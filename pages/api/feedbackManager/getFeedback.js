import db from '../../../db'

export default async function handler(req, res) {
  const feedbackID = req.headers.feedbackid
  let result = await db.query(
    `SELECT * FROM "public"."Feedback" LEFT JOIN "Case" ON "Feedback"."caseID" = "Case"."caseID" LEFT JOIN "Doctor" ON "Case"."doctorID" = "Doctor"."doctorID" WHERE "feedbackID"=$1`,
    [feedbackID]
  )
  res.json(result.rows[0])
}
