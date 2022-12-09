import db from '../../../db'

export default async function handler(req, res) {
  const { password, patientID } = req.body
  let result = await db.query(
    `UPDATE "public"."Patient" SET "password"=$1 WHERE "patientID"=$2 `,
    [password, patientID]
  )
  res.json(result.rows[0])
}
