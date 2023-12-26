import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {

const myAsyncFunction = () => {
  return new Promise((resolve,reject)=>{
    resolve("İşlem Başarılı")
  });
}

useEffect(()=>{
  myAsyncFunction()
  .then((Response)=>{
    console.log("İşlem Başarılı Cevap:",Response)
  })
  .catch(error=>{
    console.log("İşlem Başarısız Cevap:",error)
  })
  .finally(()=>{
    console.log("İşlem Bitti")
  })
})

  return (
    <>
    <div>
      <p>Lorem, ipsum dolor.</p>
      <button className='btn btn-primary'>HomePage</button>
      <Link to='/about'>About'a Git</Link>
    </div>
    </>
  );
}