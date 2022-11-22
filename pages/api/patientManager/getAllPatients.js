import db from '/db'

export default async function handler(req, res) {
  let result = await db.query(`SELECT * FROM "public"."Patient"`)
  res.json(result.rows)
}
