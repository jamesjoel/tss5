import * as yup from 'yup'


// Validation part starts
let Validation = yup.object({
    firstname : yup.string().required("Enter Your Name"),
    email : yup.string().email().required("Enter Your Email"),
    dob : yup.string().required("Enter Your Date Of Birth"),
    password : yup.string().required("Your Password is Invalid"),
    state : yup.string().required("Select Your State"),
    city : yup.string().required("Select Your City")
})
// Validation part ends

export default Validation;