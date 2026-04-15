export type AuthProvider = 'google' | 'email_password';

export type Session = {
  userId: string;
  provider: AuthProvider;
  issuedAt: string;
  expiresAt: string;
};
