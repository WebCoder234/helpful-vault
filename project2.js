// Retrieve the input Date of Birth (DOB) and calculate age
function getDOB() {
  const dobInput = document.getElementById('inputDob').value;
  const currentDate = document.getElementById('cdate').value;

  const dob = new Date(dobInput);
  const now = new Date(currentDate);

  if (isNaN(dob.getTime())) {
      document.getElementById('currentAge').textContent = 'Invalid Date';
      return;
  }

  const ageInMilliseconds = now - dob;
  const ageDate = new Date(ageInMilliseconds);

  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  document.getElementById('currentAge').textContent = `Age: ${years} years, ${months} months, ${days} days`;
}
