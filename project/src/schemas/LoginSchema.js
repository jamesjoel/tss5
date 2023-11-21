import * as YUP from 'yup';

let LoginSchema = YUP.object({
    email : YUP.string().email("This Email Id is Incorrect").required("Insert Your Email/Username"),
    password : YUP.string().required("Insert Your Password")
    
})

export default LoginSchema;