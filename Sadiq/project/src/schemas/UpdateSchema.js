import * as yup from 'yup'


// Validation part starts
let UpdateIndividualVali = yup.object({
    contact : yup.number().typeError("Enter a Valid Number").required("Enter Your Contact Number"),
    address : yup.string().required("Enter Your Address")
})
// Validation part ends

// Validation part starts
let UpdateProfileVali = yup.object({
    address : yup.string().required("Enter Your Address"),
    firstname : yup.string().required("Enter Your Name"),
    lastname : yup.string().required("Enter Your LastName"),
    dob : yup.string().required("Enter Your Date Of Birth"),
    state : yup.string().required("Select Your State"),
    city : yup.string().required("Select Your City")
})
// Validation part ends

export {UpdateIndividualVali, UpdateProfileVali};