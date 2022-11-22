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
    `UPDATE "public"."Case" SET "site" = $1, "onset" = $2, "onsetType" = $3, "characteristic" = $4, "radiation" = $5, "associatedSymp" = $6, "painScaleNow" = $7, "painScalePast" = $8, "painPeriod" = $9, "painFrequency" = $10, "worseTime" = $11, "experience" = $12, "exacerbate" = $13, "relieve" = $14 WHERE "caseID"=$15`,
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
