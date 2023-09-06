export const calculateAgeInYears = (birthdate: Date): Number => {
  const today = new Date()
  const birthDate = new Date(birthdate)
  const age = today.getFullYear() - birthDate.getFullYear()

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  ) {
    return age - 1;
  }

  return age
}
