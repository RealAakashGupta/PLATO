// Interface for SignIn data
export interface SignInData {
  email: string;
  password: string;
}

// Example: default sign-in data (optional)
export const defaultSignInData: SignInData = {
  email: '',
  password: '',
};

// Function to validate email format
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Function to validate password (minimum 6 characters here, can adjust)
export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

// Example function to simulate sign-in process
export const signIn = async (data: SignInData): Promise<boolean> => {
  if (!validateEmail(data.email)) {
    throw new Error('Invalid email format');
  }

  if (!validatePassword(data.password)) {
    throw new Error('Password must be at least 6 characters');
  }

  // Simulate API call
  console.log('Signing in with:', data);
  return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
};

export interface SignInField {
  label: string;
  name: "email" | "password";
  type: string;
}

export const signInFields: SignInField[] = [
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
];
