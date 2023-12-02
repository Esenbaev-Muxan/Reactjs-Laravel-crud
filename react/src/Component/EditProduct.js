import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditProduct() {
    const { id } = useParams();
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        // Add other properties as needed
    });

    useEffect(() => {
        getProduct();
    }, []);

    function getProduct() {
        axios.get(`http://127.0.0.1:8000/products/${id}`).then(function (response) {
            console.log(response);
            setInputs(response.data.product);
        });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Update logic: Send a PUT request to your backend with the updated product information
            const response = await axios.put(`http://127.0.0.1:8000/products/${id}`, inputs);
            console.log(response.data);
            // Add any additional logic after successful update
        } catch (error) {
            console.error("Error updating product:", error);
            // Handle error appropriately
        }
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mt-4">
                        <h5 className="mb-4">Edit Product</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <label htmlFor="name" className="col-sm-3">Product Title</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className='form-control'
                                        value={inputs.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label htmlFor="description" className="col-sm-3">Product Description</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        id="description"
                                        name="description"
                                        className='form-control'
                                        value={inputs.description}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <div className="col-sm-3">Product Image</div>
                                <div className="col-sm-9">
                                    <input type="file" className="form-control" />
                                </div>
                            </div>

                            {/* Add other form fields as needed */}

                            <div className="mb-3 row">
                                <label htmlFor="" className="col-sm-3"></label>
                                <div className="col-sm-1">
                                    <button type='submit' className='btn btn-success'>Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default EditProduct;
