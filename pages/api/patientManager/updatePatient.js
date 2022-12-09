import db from '../../../db'

export default async function handler(req, res) {
  const {
    firstName,
    lastName,
    sex,
    citizenID,
    phoneNumber,
    username,
    password,
    email,
    bloodGroup,
    medCondition,
    allergy,
    image,
    patientID,
  } = req.body

  let result = await db.query(
    `UPDATE "public"."Patient" SET "firstName"=$1, "lastName"=$2, sex=$3, "citizenID"=$4, "phoneNumber"=$5, "username"=$6, "password"=$7, "email"=$8, "bloodGroup"=$9, "medCondition"=$10, "allergy"=$11, "image"=$12 WHERE "patientID"=$13`,
    [
      firstName,
      lastName,
      sex,
      citizenID,
      phoneNumber,
      username,
      password,
      email,
      bloodGroup,
      medCondition,
      allergy,
      image,
      patientID,
    ]
  )
  res.json(result.rows)
}
