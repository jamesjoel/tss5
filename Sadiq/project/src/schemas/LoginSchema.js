import * as yup from 'yup'

let LoginCheck = yup.object({
    email : yup.string().email().required("Enter Your Email"),
    password : yup.string().required("Enter Your password")
})



export default LoginCheck