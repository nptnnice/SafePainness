import db from '/db'
import addNotification from '/functions/addNotification'

export default async function handler(req, res) {
  const { doctorID, patientID } = req.body
  const date = new Date()

  let result = await db.query(
    `INSERT INTO "public"."Case" ("doctorID", "patientID", "date") VALUES ($1, $2, $3)`,
    [doctorID, patientID, date]
  )

  // get the caseID after insert
  let caseResult = await db.query(
    `SELECT "caseID" FROM "public"."Case" WHERE "doctorID" = $1 AND "patientID" = $2 AND "date" = $3`,
    [doctorID, patientID, date]
  )
  let caseID = caseResult.rows[0].caseID

  // add notification
  let notification = await addNotification(
    doctorID,
    patientID,
    date,
    'You have a new case',
    patientID,
    caseID,
    '0',
    'case'
  )

  res.json(result.rows)
}
