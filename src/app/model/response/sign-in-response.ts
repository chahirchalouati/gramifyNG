export interface SignInResponse {
  user: {
    id: number,
    username: string,
    fullName: string,
    email: string,
    profile: any,
    createdAt: number
  },
  token: string,
  generatedAt: Date
}
