import db from '../../../db'

export default async function handler(req, res) {
  const { caseName, caseID } = req.body
  let result = await db.query(
    `UPDATE "public"."Case" SET "caseName"=$1 WHERE "caseID"=$2`,
    [caseName, caseID]
  )
  res.json(result.rows)
}
