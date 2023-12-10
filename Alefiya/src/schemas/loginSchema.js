import * as YUP from "yup";

let loginSchema = YUP.object({
    name: YUP.string().email().required("Please enter your username"),
    password: YUP.string().required("Please enter your password")
})

export default loginSchema;