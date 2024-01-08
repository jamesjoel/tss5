import * as YUP from "yup";

let loginSchema = YUP.object({
    email: YUP.string().email("This Email Id is Incorrect").required("Insert Your Email/Username"),
    password: YUP.string().required("Please enter your password")
})

export default loginSchema;