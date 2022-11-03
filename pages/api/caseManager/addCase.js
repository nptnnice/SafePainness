import db from '../../../db'

export default async function handler(req, res) {
  const {
    doctorID,
    patientID,
    date,
    site,
    onset,
    onsetType,
    characteristic,
    radiation,
    associatedSymp,
    painScaleNow,
    painScalePast,
    painPeriod,
    painOccur,
    worseTime,
    experience,
    exacerbate,
    relieve,
  } = req.body
  let result = await db.query(
    `INSERT INTO "public"."Case" ("doctorID", "patientID", "date", "site", "onset", "onsetType", "characteristic", "radiation", "associatedSymp", "painScaleNow", "painScalePast", "painPeriod", "painOccur", "worseTime", "experience", "exacerbate", "relieve") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`,
    [
      doctorID,
      patientID,
      date,
      site,
      onset,
      onsetType,
      characteristic,
      radiation,
      associatedSymp,
      painScaleNow,
      painScalePast,
      painPeriod,
      painOccur,
      worseTime,
      experience,
      exacerbate,
      relieve,
    ]
  )
  res.json(result.rows)
}
