import db from '/db'
import addNotification from '/functions/addNotification'

export default async function handler(req, res) {
  const {
    caseID,
    symptom,
    painScale,
    comment,
    image,
    senderID,
    senderName,
    patientID,
  } = req.body
  const datetime = new Date()

  let result = await db.query(
    `INSERT INTO "public"."Record"
      ("caseID", "datetime", "symptom", "painScale", "comment", "image")
      VALUES ($1,$2,$3,$4,$5,$6)`,
    [caseID, datetime, symptom, painScale, comment, image]
  )

  // get doctorID from case
  let caseResult = await db.query(
    `SELECT "doctorID" FROM "public"."Case" WHERE "caseID" = $1`,
    [caseID]
  )
  let receiverID = caseResult.rows[0].doctorID

  // get recordID after insert
  let recordResult = await db.query(
    `SELECT "recordID" FROM "public"."Record" WHERE "caseID" = $1 AND "datetime" = $2`,
    [caseID, datetime]
  )
  let recordID = recordResult.rows[0].recordID

  // add notification
  let notification = await addNotification(
    senderID,
    receiverID,
    datetime,
    `${senderName} has added a new record`,
    patientID,
    caseID,
    recordID,
    'record'
  )
  res.json(result.rows)
}
