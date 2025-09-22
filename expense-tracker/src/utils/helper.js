// utils/helper.js

/**
 * Validate email
 * @param {string} email 
 * @returns {true|string} true jika valid, string error jika tidak valid
 */
export const validateEmail = (email) => {
  if (!email) return "Email cannot be empty.";

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return "Please enter a valid email address.";

  return true;
};

/**
 * Validate password
 * @param {string} password 
 * @param {number} minLength optional, default 8
 * @returns {true|string} true jika valid, string error jika tidak valid
 */
export const validatePassword = (password, minLength = 8) => {
  if (!password) return "Password cannot be empty.";
  if (password.length < minLength) return `Password must be at least ${minLength} characters.`;
  return true;
};
