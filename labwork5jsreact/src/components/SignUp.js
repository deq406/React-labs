export function isNormalEmail(emailInput) {
  const email = emailInput?.value;
  const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  return re.test(email);
}
