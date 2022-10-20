import db from '../../db'

export default async (req, res) => {
  if (req.method === 'GET') {
    let result = await db.query(`SELECT * FROM "public"."Doctor"`)
    res.json(result.rows)
  }
}
