export const calculateAgeInYears = (birthdate: Date): number => {
  const today = new Date()
  const birthDate = new Date(birthdate)
  let age = today.getFullYear() - birthDate.getFullYear()

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  ) {
    return age--;
  }

  return age
}

export const calculateFoodNeeds = (
  birthdate: Date,
  height: number,
  weight: number,
  favouriteFruit: string,
  gender: string,
  species: string
): number => { 
  let foodNeeds = (height + weight) / 250;
  const age = calculateAgeInYears(birthdate);

  if (age > 20) {
    foodNeeds /= 2;
  }
  if (age < 2) {
    foodNeeds *= 2;
  }

  if (favouriteFruit == 'cherry') {
    foodNeeds += 28;
  }

  if (gender == 'male') {
    foodNeeds *= 1.2;
  }

  if (species == 'fish') {
    foodNeeds = 0;
  }

  return Math.round(foodNeeds * 100) / 100;
};