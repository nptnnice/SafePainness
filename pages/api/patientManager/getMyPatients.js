import db from '/db'

export default async function handler(req, res) {
  const { doctorID, page, search } = req.body
  let result = await db.query(
    `SELECT DISTINCT "Case"."patientID", "Patient"."firstName", "Patient"."lastName", "Patient"."image", CEILING(COUNT(*) OVER()/8) as page_amount
    FROM "public"."Case" LEFT JOIN "public"."Patient" ON "Case"."patientID" = "Patient"."patientID"
    WHERE "doctorID" = $1 AND LOWER(CONCAT("firstName", ' ', "lastName"))
    LIKE '%${search}%' LIMIT 8 OFFSET $2`,
    [doctorID, (page - 1) * 8]
  )
  res.json(result.rows)
}
