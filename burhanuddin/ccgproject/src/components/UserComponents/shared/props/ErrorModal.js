import React from 'react'

let ErrorModal = () => {


  return (
    <div className='modal fade' id='modal' tabIndex="-1">
       <div className='modal-dialog'>
        <div className='modal-content'>
            <div className='modal-body'>
                <small className='color-danger'>Please fill all the details correctly</small>
            </div>
        </div>
       </div>
    </div>
  )
}

export default ErrorModal