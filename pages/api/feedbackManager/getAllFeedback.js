import db from '../../../db'

export default async function handler(req, res) {
  //const { caseID } = req.body

  const caseID = '2022-000003'

  let result = await db.query(
    //sort by datetime
    `SELECT * FROM "public"."Feedback" WHERE "caseID"=$1 ORDER BY "datetime" DESC`,
    [caseID]
  )
  res.json(result.rows)
}
