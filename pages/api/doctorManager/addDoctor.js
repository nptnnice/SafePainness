import db from '../../../db'

export default async function handler(req, res) {
  const {
    department,
    firstName,
    lastName,
    birthDate,
    citizenID,
    licenseNO,
    phoneNumber,
    username,
    password,
    email,
    image,
  } = req.body

  let result = await db.query(
    `INSERT INTO "public"."Doctor"
        ("department", "firstName", "lastName", "birthDate", "citizenID", "licenseNO", "phoneNumber", "username", "password", "email", "image")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
    [
      department,
      firstName,
      lastName,
      birthDate,
      citizenID,
      licenseNO,
      phoneNumber,
      username,
      password,
      email,
      image,
    ]
  )
  res.json(result.rows)
}
