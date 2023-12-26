import React, { useState } from 'react';

export default function ProductDetail() {
  const [newProduct, setNewProduct] = useState({
    id: 1,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const addNewProduct = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error('Ürün eklenirken bir hata oluştu.');
      }

      const result = await response.json();
      console.log('Yeni Ürün Eklendi:', result);
      alert('Yeni ürün sepete eklendi!');
    } catch (error) {
      console.error('Hata:', error.message);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row border p-2">
          <div className="row text-center">
            <h3>Yeni Ürün Ekle</h3>
          </div>
          <div className='row mt-3'>
            <div className="col-12 text-center">
              <div className="border p-3 text-center">
                <div className="form-group">
                  <label htmlFor="title">Ürün Adı:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={newProduct.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Fiyat:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Açıklama:</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="brand">Marka:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="brand"
                    name="brand"
                    value={newProduct.brand}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Kategori:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    name="category"
                    value={newProduct.category}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="thumbnail">Thumbnail URL:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="thumbnail"
                    name="thumbnail"
                    value={newProduct.thumbnail}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <button className='btn btn-success' onClick={addNewProduct}>Ürün Ekle</button>
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
