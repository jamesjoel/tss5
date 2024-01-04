import * as YUP from 'yup';

let CateSchema = YUP.object({
    name : YUP.string().required("Insert Product Category")
})

export default CateSchema;