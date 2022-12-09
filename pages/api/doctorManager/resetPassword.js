import db from '../../../db'

export default async function handler(req, res) {
  const { password, doctorID } = req.body
  let result = await db.query(
    `UPDATE "public"."Doctor" SET "password"=$1 WHERE "doctorID"=$2 `,
    [password, doctorID]
  )
  res.json(result.rows[0])
}
