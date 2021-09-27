function sumSalary(salaries) {

  return Object.values(Object.fromEntries(
    Object.entries(salaries).filter(([, value]) => Number.isFinite(value)))).reduce((a, b) => a + b, 0);

}
