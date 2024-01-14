import * as YUP from 'yup'
let StudentSchema = YUP.object({
    name : YUP.string().required('Insert Your Full Name'),
    age : YUP.string().required('Insert Your Age'),
    collegeyear : YUP.string().required('Select College Year'),
    education : YUP.string().required('Select Education'),

})
export default StudentSchema