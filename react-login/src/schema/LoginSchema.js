import * as YUP from 'yup';

export default YUP.object({
    email : YUP.string().email("Email id is not valid").required("Insert Your Email Id"), 
    password : YUP.string().required("Insert Your Password")
})