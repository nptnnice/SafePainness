import db from '../../../db'

export default async function handler(req, res) {
  //const { caseID, datetime, message } = req.body

  const caseID = '2022-000003'
  const datetime = new Date();
  const message = req.body.message;

  let result = await db.query(
    `INSERT INTO "public"."Feedback"
    ("caseID", "datetime", "message")
    VALUES ($1, $2, $3)`,
    [caseID, datetime, message]
  )
  res.json(result.rows)
}
