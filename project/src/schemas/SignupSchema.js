import * as YUP from 'yup';

let SingupSchema = YUP.object({
    name : YUP.string().required("Insert Your Full Name"),
    email : YUP.string().email("This Email Id is Incorrect").required("Insert Your Email/Username"),
    password : YUP.string().required("Insert Your Password"),
    repassword : YUP.string().oneOf([YUP.ref("password")], "Password and Re-Password should be same").required("Insert Your Re-Password"),
    gender : YUP.string().required("Select Your Gender"),
    address : YUP.string().required("Insert Your Address"),
    state : YUP.string().required("Select Your State"),
    city : YUP.string().required("Select Your City"),
    contact : YUP.number().typeError("Please Insert Number Only").min(1000000, "Min 7 digit").max(9999999999, "Max 10 digit").required("Insert Your Contact Number")
})

export default SingupSchema;