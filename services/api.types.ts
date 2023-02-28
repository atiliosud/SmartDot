type companyInfoType = {
  name: string;
  segment: string;
  phone: string;
};
type loginDataType = {
  email: string;
  password: string;
};
type personalInfo = {
  firstName: string;
  lastName: string;
  countryId: number;
};
export type signUpBodyType = {
  companyInfo: companyInfoType;
  loginData: loginDataType;
  personalInfo: personalInfo;
};

export type verificationCodeBodyType = {
  code: number;
  securityToken: string;
};
