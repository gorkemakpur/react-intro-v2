import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();//react routerden gelen id paramtetresi çıkartılır by bileşene urlden gelen id bilgisini sağlar
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => {
        setProductDetails(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);
return (
    <>
<div className="container mt-4">
        <div className="row border p-2 ">
          <div className="row text-center">
            <h3>{productDetails.title}</h3>
          </div>
          <div className='row mt-3'>
            <div className="col-6 pb-3 text-center">
              <img src={productDetails.thumbnail}  alt="..." />
            </div>
            <div className="col-6 text-center">
              <div className="border p-3 text-center">
                  
                  <div className="col-12">
                    <div className='btn btn-success'><strong>${productDetails.price}</strong></div>
                    <hr/>
                  </div>
                  
                  <div className="row text-center">
                    <h5>Product Detail</h5>
                    <span>{productDetails.description}</span>
                  </div>


                  <div className="row mt-4">
                    <div className="col-6">
                  <button className='btn btn-success'>Add Cart</button>
                  </div>
                  <div className="col-6">
                  <button className='btn btn-warning'>Move To Home</button>
                  </div>
                  </div>


                  </div>

                </div>
              </div>
            </div>
          </div>
    
  
    </>
  );
}