import * as yup from 'yup'

let ChangePassword = yup.object({
    currentpassword : yup.string().required("Enter Your Current Password"),
    changepassword : yup.string().required("Enter New Password"),
    rechangepassword : yup.string().oneOf([yup.ref("changepassword")], "Password and Re-Password should be same").required("Enter New Password")
})

export default ChangePassword