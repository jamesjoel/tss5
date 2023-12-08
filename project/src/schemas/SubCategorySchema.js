import * as YUP from 'yup';

let SubCategorySchema = YUP.object({
    category : YUP.string().required("Select Category"),
    name : YUP.string().required("Insert Sub-Category Name")
})

export default SubCategorySchema;