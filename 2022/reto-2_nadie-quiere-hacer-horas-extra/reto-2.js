function countHours(year, holidays) {
  return holidays.reduce((extraHours, holiday) => {
    const dayToValidate = new Date(`${year}/${holiday}`)
    if (dayToValidate.getDay() === 0 || dayToValidate.getDay() === 6) {
      return extraHours
    }
    return extraHours + 2
  }, 0)
}

export { countHours }
