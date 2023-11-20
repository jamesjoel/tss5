import * as yup from 'yup'


// Validation part starts
let UpdateIndividual = yup.object({
    contact : yup.string().required("Enter Your Contact Number"),
    address : yup.string().required("Enter Your Address")
})
// Validation part ends

export default UpdateIndividual;