import * as YUP from 'yup';

let SignupSchema = YUP.object({
    name: YUP.string().required("Please insert you Fullname"),
    email: YUP.string().required("Please insert your email"),
    password: YUP.string().required("Please insert your password"),
    repassword: YUP.string().required("Please re-enter your password"),
    gender: YUP.string().required("Please select your gender"),
    address: YUP.string().required("Please insert your current address"),
    state: YUP.string().required("Please select your state "),
    city: YUP.string().required("Please select your city"),
    contact: YUP.number().typeError("Please insert number only").max(9999999999, "More than 10 digits").required("Please enter you contact number")
})

export default SignupSchema;
