import * as yup from 'yup'

let ForgotPassword = yup.object({
    contact : yup.number().typeError("Enter a Valid Number").required("Enter Your Contact Number"),
    otp : yup.number().typeError("Enter a Valid OTP").required("Enter Your OTP"),
})

export default ForgotPassword