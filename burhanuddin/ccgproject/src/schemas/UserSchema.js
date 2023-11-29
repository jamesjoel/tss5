import * as YUP from 'yup'

let SignUpSchema = YUP.object({
    name: YUP.string().required("Insert your fullname"),
    gender: YUP.string().required("Select your gender"),
    number:YUP.string().required("Enter your number"),
    email:YUP.string().required("Enter your email"),   
    password:YUP.string().required("Create a password"),
    repassword: YUP.string().required("Re-enter your password").oneOf([YUP.ref('password'), null],'password and repassword should be the same'),
    address:YUP.string().required("Enter your address"),
    state:YUP.string().required("Select your state"),
    city:YUP.string().required("Select your city")
})

export default SignUpSchema;