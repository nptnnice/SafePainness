import db from '../../../db'

export default async function handler(req, res) {
  const doctorID = req.headers.doctorid
  let result = await db.query(
    `SELECT * FROM "public"."Doctor" WHERE "doctorID"=$1`,
    [doctorID]
  )
  res.json(result.rows[0])
}
