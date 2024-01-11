import * as YUP from 'yup'

let TeacherSchema = YUP.object({
    name : YUP.string().required("Insert Full Name"),
    salary : YUP.string().required("Insert Salary"),
    education : YUP.string().required("Select Education"),
    address : YUP.string().required("Insert Address"),
})

export default TeacherSchema