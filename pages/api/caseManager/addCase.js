import db from '../../../db'
import addNotification from '../../../function/addNotification'

export default async function handler(req, res) {
  const { doctorID, patientID, date } = req.body
  let result = await db.query(
    `INSERT INTO "public"."Case" ("doctorID", "patientID", "date") VALUES ($1, $2, $3)`,
    [doctorID, patientID, date]
  )

  let notification = await addNotification(
    doctorID,
    patientID,
    date,
    `You have a new case from doctor ${doctorID}`
  )

  res.json(result.rows)
}
