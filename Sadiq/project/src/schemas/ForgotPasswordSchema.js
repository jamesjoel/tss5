import * as yup from 'yup'

let NumberVerification = yup.object({
    contact : yup.number().typeError("Enter a Valid Number").required("Enter Your Contact Number"),
})

let OTPVerification = yup.object({
    otp : yup.number().typeError("Enter a Valid OTP").min(10000).max(99999).required("Enter Your OTP"),
})

let ChangePassword = yup.object({
    changepassword : yup.string().required("Enter Your New Password"),
    rechangepassword : yup.string().oneOf([yup.ref("changepassword")], "Password and Re-Password should be same").required("Re-Enter Your New Password"),
})

export {NumberVerification, OTPVerification, ChangePassword}