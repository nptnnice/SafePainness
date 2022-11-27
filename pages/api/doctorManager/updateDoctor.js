import db from '../../../db'

export default async function handler(req, res) {
  const {
    department,
    firstName,
    lastName,
    citizenID,
    licenseNO,
    phoneNumber,
    username,
    password,
    email,
    image,
    doctorID,
  } = req.body
  let result = await db.query(
    `UPDATE "public"."Doctor" SET "department"=$1, "firstName"=$2, "lastName"=$3, "citizenID"=$4, "licenseNO"=$5, "phoneNumber"=$6, "username"=$7, "password"=$8, "email"=$9, "image"=$10 WHERE "doctorID"=$11`,

    [
      department,
      firstName,
      lastName,
      citizenID,
      licenseNO,
      phoneNumber,
      username,
      password,
      email,
      image,
      doctorID,
    ]
  )
  res.json(result.rows)
}
