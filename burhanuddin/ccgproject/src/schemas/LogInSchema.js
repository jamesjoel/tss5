import * as YUP from 'yup'

let LogInSchema = YUP.object({
    username : YUP.string().required("Insert your username").email("Email Id is incorrect"),
    password : YUP.string().required("Insert your password")
})

export default LogInSchema