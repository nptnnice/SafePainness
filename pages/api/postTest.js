import db from '../../db'

export default async (req, res) => {
  const { firstname, lastname, phone, img } = req.body
  if (req.method === 'POST') {
    let result = await db.query(
      `INSERT INTO "public"."Test" ("firstname", "lastname", "phone", "img") VALUES ('${firstname}', '${lastname}', '${phone}', '${img}')`
    )
    res.json(result.rows)
  }
}
