import * as YUP from 'yup'

let CategorySchema = YUP.object({
    Category_name : YUP.string().required('Enter a Category name')
})

export default CategorySchema