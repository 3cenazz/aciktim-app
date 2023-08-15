import { object, string, number, date, InferType, ref } from 'yup';

const validations = object({
    name: string().required("Lütfen ad ve soyadınızı giriniz."),
    userName: string().required("Lütfen kullanıcı adınızı giriniz."),
    // age: number().required().positive().integer(),
    email: string().email().required("Lütfen e-posta adresinizi giriniz."),
    phoneNumber: string().length(11).required("Lütfen telefon numaranızı giriniz."),
    address: string().required("Lütfen adresinizi giriniz."),
    password: string().min(5).required("Lütfen şifrenizi giriniz."),
    passwordVerification: string().oneOf([ref("password")],"Lütfen aynı parolayı giriniz.").required()

  });

  export default validations 