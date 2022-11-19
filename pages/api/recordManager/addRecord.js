import db from '../../../db'

export default async function handler(req, res) {
  const { symptom, painScale, comment, image } = req.body;
  const datetime = new Date();

  const caseID = '2022-000003'
 
  console.log(req.body)

  if (req.method === 'POST') {
    console.log(`INSERT INTO "public"."Record"
    ("caseID", "datetime", "symptom", "painScale", "comment", "image")
    VALUES ('${caseID}','${datetime}','${symptom}','${painScale}','${comment}',${image})`)
    
    let result = await db.query(
      `INSERT INTO "public"."Record"
      ("caseID", "datetime", "symptom", "painScale", "comment", "image")
    VALUES ('${caseID}','${datetime}','${symptom}','${painScale}','${comment}',${image})`
  )
  res.json(result.rows)
  }

}
