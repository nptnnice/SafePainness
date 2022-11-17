import db from '../../../db'

export default async function handler(req, res) {
  const {
    caseID,
    site,
    onset,
    onsetType,
    characteristic,
    radiation,
    associatedSymp,
    painScaleNow,
    painScalePast,
    painPeriod,
    painFrequency,
    worseTime,
    experience,
    exacerbate,
    relieve,
  } = req.body
  let result = await db.query(
    `UPDATE "public"."Case" SET ("site", "onset", "onsetType", "characteristic", "radiation", "associatedSymp", "painScaleNow", "painScalePast", "painPeriod", "painFrequency", "worseTime", "experience", "exacerbate", "relieve") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) WHERE "caseID"=$15)`,
    [
      site,
      onset,
      onsetType,
      characteristic,
      radiation,
      associatedSymp,
      painScaleNow,
      painScalePast,
      painPeriod,
      painFrequency,
      worseTime,
      experience,
      exacerbate,
      relieve,
      caseID,
    ]
  )
  res.json(result.rows)
}
