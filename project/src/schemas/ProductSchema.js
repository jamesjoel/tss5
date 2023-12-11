import * as YUP from 'yup';

let ProdcutSchema = YUP.object({
    title : YUP.string().required("Insert Product Title"),
    price : YUP.number().typeError("Insert Price Should be Number").required("Insert Product Price"),
    category : YUP.string().required("Select Product Category"),
    subcategory : YUP.string().required("Select Product Sub Category"),
    discount : YUP.number().typeError("Dicount Should be Number").required("Insert Product Discount"),
    detail : YUP.string().required("Insert Product Detail"),
    quantity : YUP.number().typeError("Quantity Should be Number").required("Insert Product Total Quantity"),
    
})

export default ProdcutSchema;