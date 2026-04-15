const allowedPasswordCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

function generateStrongPassword(length = 12) {
  const safeLength = Math.max(length, 8);
  let strongPassword = '';

  do {
    strongPassword = Array.from({ length: safeLength }, () => {
      const randomIndex = Math.floor(Math.random() * allowedPasswordCharacters.length);
      return allowedPasswordCharacters.charAt(randomIndex);
    }).join('');
  } while (!isStrongPassword(strongPassword));

  return strongPassword;
}

function isStrongPassword(password) {
  if (password.length < 8) {
    return false;
  }

  return /[A-Z]/.test(password)
    && /[a-z]/.test(password)
    && /\d/.test(password)
    && /[!@#$%^&*()_+]/.test(password);
}

module.exports = {
  generateStrongPassword,
  isStrongPassword,
};
