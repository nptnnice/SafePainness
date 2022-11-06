import db from '../../../db'

export default async function handler(req, res) {
  const {
    firstName,
    lastName,
    sex,
    birthDate,
    citizenID,
    phoneNumber,
    username,
    password,
    email,
    bloodGroup,
    medCondition,
    allergy,
    image,
  } = req.body
  let result = await db.query(
    `INSERT INTO "public"."Patient"
    ("firstName", "lastName", "sex", "birthDate", "citizenID", "phoneNumber", "username", "password", "email", "bloodGroup", "medCondition", "allergy", "image")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
    [
      firstName,
      lastName,
      sex,
      birthDate,
      citizenID,
      phoneNumber,
      username,
      password,
      email,
      bloodGroup,
      medCondition,
      allergy,
      image,
    ]
  )
  res.json(result.rows)
}
