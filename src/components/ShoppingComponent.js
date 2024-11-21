import { useState,useEffect } from "react";

export default function ShoppingComponent(){
    const [category,setCategory]=useState([])
    const [product,setProduct]=useState([])
    function showcatagory(){
      fetch("https://fakestoreapi.com/products/categories")
      .then(response => response.json())
      .then(data=>{
        data.unshift("All")
        setCategory(data)
      })

    }
    
    function showProducts(url){
      if(url){
        fetch(url)
      } else {
        url="https://fakestoreapi.com/products";
      }
      fetch(url)
      .then(response => response.json())
      .then(data =>{
        setProduct(data)
      })

    }

    function catergoryGiving(e){
      if(e.target.value=="All"){
        showProducts("https://fakestoreapi.com/products");
      }else{
        showProducts(`https://fakestoreapi.com/products/category/${e.target.value.toLowerCase()}`);
      }
     
      

    }

    useEffect(()=>{
      showcatagory()
      showProducts()

    }, []);

    return(
  <div className="container-fluid " style={{marginTop:"80px"}}>
        
  <nav>
    <h1 className="bg-danger text-white text-center p-2 fixed-top">
      <span className="bi bi-cart"></span> Shop Here
    </h1>
  </nav>

  <div className="d-flex">
  
  <div className="drop-down">
  <select className="m-3 text-white rounded-lg" onChange={catergoryGiving} style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>{
    category.map(mat=>
      <option key={mat}>{mat.toUpperCase()}</option>
    )
  }
  </select>
  </div>

  <div className="entire info">
  <main className="d-flex flex-wrap">
      {
        product.map(prod=>
        <div className="card w-25 p-3  m-2 " >
          <img src={prod.image} alt="hello" className="card-img-top p-3 w-29" style={{height:"150px"}} key={prod.image}/>
          <div className="info" style={{height:"210px"}}>
            <dd>{prod.title}</dd>
            <dt>Price</dt>
            <dd>{prod.price}</dd>
            {/* <p className="text-justify"><span>Price:</span>{prod.description}</p> */}
            <dt>Rating</dt>
            <dd className="bi bi-star-fill text-success">{prod.rating.rate}</dd>
          </div>
          <button className="btn btn-danger w-100"> <span className="bi bi-cart4"/> Add to cart</button>
        </div>
        
         
       
        )
      }
      </main>
      </div>
</div>
</div>
    );
}