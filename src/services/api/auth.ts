export default (axios: any) => ({
  forgotPassword(email: string) {
    return axios.post("/auth/password/forgot", { email });
  }
});
