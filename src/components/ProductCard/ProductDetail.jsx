import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import ProductCard from './ProductCard';

export default function ProductDetail() {
    const { productId } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    useEffect(() => {
      // Veriyi belirli bir ID'ye göre çekmek için Axios kullanımı
      axios.get('https://dummyjson.com/products${productId}') // API endpoint'i doğru olan bir adresle değiştirin
        .then(response => {
          setSelectedProduct(response.data); // API'den gelen veriyi state'e atar
        })
        .catch(error => {
          console.error('Veri çekme hatası:', error);
        });
    }, [productId]); // useEffect, productId değiştiğinde çalışır
  
    return (
      <div>
        {selectedProduct && <ProductCard product={selectedProduct} />}
      </div>
    );
  }
