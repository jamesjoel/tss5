import * as yup from 'yup';

let SignupSchema = yup.object({
    username : yup.string().required("Enter User Name"),
    email : yup.string().email().required("Enter Your Email ID"),
    password : yup.string().required("Enter Your Password")
})

export default SignupSchema;