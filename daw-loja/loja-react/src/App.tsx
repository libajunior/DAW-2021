import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./@types";
import { Brands } from "./components/Brands";
import { Collection } from "./components/Collection";
import { Header } from "./components/Header";
import { NewsLetter } from "./components/NewsLetter";
import { Products } from "./components/Products";



function App() {
  const brands = [
    {alt: 'brand1', source: 'assets/images/brand1.png'},
    {alt: 'brand2', source: 'assets/images/brand2.png'},
    {alt: 'brand3', source: 'assets/images/brand3.png'},
    {alt: 'brand4', source: 'assets/images/brand4.png'},
    {alt: 'brand5', source: 'assets/images/brand5.png'}
  ];

  const [products, setProducts] = useState<Product[]>([] as Product[]);

  useEffect(() => {
  
    axios.get('http://localhost:3333/products')
      .then(result => {
        setProducts(result.data);
      })
      .catch(error => {
        console.log('Puts', error);
      })

  }, []);

  return (
    <div>

      <Header />

      <main>
        <div className="container">

          <Collection />

          <Products items={products} />
        </div>

        <NewsLetter />

        <div className="container">
          <Brands items={brands} />
        </div>
      </main>

      
    </div>
  )
}

export default App;
