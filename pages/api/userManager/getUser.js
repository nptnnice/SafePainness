import db from '/db'

export default async function handler(req, res) {
  const userID = req.headers.userid

  let result = await db.query(
    `SELECT "doctorID" AS "userID", "firstName", "lastName", "role", "image"
    FROM "public"."Doctor"
    WHERE "doctorID"=$1
    UNION
    SELECT "patientID" AS "userID", "firstName", "lastName", "role", "image"
    FROM "public"."Patient"
    WHERE "patientID"=$1`,
    [userID]
  )

  res.json(result.rows[0])
}
