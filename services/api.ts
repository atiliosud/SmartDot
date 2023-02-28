import type { signUpBodyType, verificationCodeBodyType } from "./api.types";
import axios from "./axios";

export default {
  signup: async (body: signUpBodyType) => {
    return await axios.post("/auth/signup", body);
  },
  verifyEmailCode: async (body: verificationCodeBodyType) => {
    return await axios.post("/auth/verify-email-code", body);
  },
  getCountries: async () => {
    return await axios.get("/countries");
  },
};
