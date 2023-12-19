import React, {useRef} from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

/*
class About extedns React.Component{

}


*/

const About = () => {

  let a = useRef();

  let frm = useFormik({
    initialValues : {
      image : ""
    },
    onSubmit : (formdata)=>{
      
      // console.log(a.current.files[0])
      let file = a.current.files[0];
      let myfrom = new FormData();
      myfrom.append("photo", file)
      axios.post("http://localhost:8080/api/demo", myfrom).then(response=>{
        console.log(response.data);
      })
    }
  })
  

  return (
    <div className="container" style={{marginTop : "150px", minHeight : "700px"}}>
      <form onSubmit={frm.handleSubmit}>
      <div className="row">
          <div className='col-md-12'>
            
            <label>Select Your File</label>
            <input ref={a} type='file' name='image' onChange={frm.handleChange}/>
            <br />
            <br />
            <button type='submit'>OK</button>
          </div>
      </div>
      </form>
    </div>
  )
}

export default About