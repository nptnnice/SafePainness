import db from '../../../db'

export default async function handler(req, res) {
  const receiverID = req.headers.receiverid

  let result = await db.query(
    //sort by datetime
    `SELECT * FROM "public"."Notification" WHERE "receiverID"=$1 ORDER BY "datetime" DESC`,
    [receiverID]
  )
  res.json(result.rows)
}
