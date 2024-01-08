import * as YUP from "yup";

let loginSchema = YUP.object({
    username: YUP.string().required("Please enter your username"),
    password: YUP.string().required("Please enter your password")
})

export default loginSchema;