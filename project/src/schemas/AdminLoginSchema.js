import * as YUP from 'yup';

let AdminLoginSchema = YUP.object({
    username : YUP.string().required("Insert Your Username"),
    password : YUP.string().required("Insert Your Password")
    
})

export default AdminLoginSchema;