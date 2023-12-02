import React, { useState } from 'react';
import axios from 'axios';


import { useNavigate } from "react-router-dom"; 

function Addproduct() {

    const navigate = useNavigate();

  const [txtname, setName] = useState('');
  const [txtdescription, setDescription] = useState('');
  const [fileimage, setPhoto] = useState('');

  const [message, setMessage] = useState('');

  const uploadProduct = async () => {
    console.log(fileimage);

    const formData = new FormData();
    formData.append('name', txtname);
    formData.append('description', txtdescription);

    // Check if fileimage is not undefined before appending it
    if (fileimage) {
      formData.append('image', fileimage);
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/products", formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if(response){
        console.log(response.data);

        setMessage(response.message)
        setTimeout(() =>{
            navigate('/productlist');
        }, 2000)


      }

    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadProduct();
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-4">
            <h5 className="mb-4">Add Product </h5>
            <form onSubmit={handleSubmit} action="">
              <div className="mb-3 row">
                <label htmlFor="" className="col-sm-3">Product Title</label>
                <div className="col-sm-9">
                  <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="" className="col-sm-3">Product Description</label>
                <div className="col-sm-9">
                  <input type="text" className='form-control' onChange={(e) => setDescription(e.target.value)} />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="" className="col-sm-3">Product Image</label>
                <div className="col-sm-9">
                  <input type="file" className='form-control' onChange={(e) => setPhoto(e.target.files[0])} />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="" className="col-sm-3"></label>
                <div className="col-sm-1">
                  <button type='submit' className='btn btn-success'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Addproduct;
