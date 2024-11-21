import { useState,useEffect } from "react";

export default function ShoppingComponent(){
    const [category,setCategory]=useState([])
    const [product,setProduct]=useState([])
    // const [,se]
    
    
    function showcatagory(){
      fetch("https://fakestoreapi.com/products/categories")
      .then(response => response.json())
      .then(data=>{
        data.unshift("all")
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
      if(e.target.value=='all'){
        showProducts('https://fakestoreapi.com/products');
      }else{
        showProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
      }
    }

    function cartbutton(e){
      alert(e.target.id)
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
  
  <div className="drop-down col-2">
  <select className="m-3 text-white rounded-lg" onChange={catergoryGiving} style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>{
    category.map(mat=>
      <option key={mat}>{mat}</option>
    )
  }
  </select>
  </div>

  <div className="entire info col-18">
  <main className="d-flex flex-wrap ">
      {
        product.map(prod=>
        <div className="card w-25 p-3  m-3 " >
          <img src={prod.image} alt="hello" className="card-img-top p-3 w-29" style={{height:"150px"}} key={prod.image}/>
          <div className="info" style={{height:"210px"}}>
            <dd key={prod.title}>{prod.title}</dd>
            <dt>Price</dt>
            <dd key={prod.price}>{prod.price}</dd>
            {/* <p className="text-justify"><span>Price:</span>{prod.description}</p> */}
            <dt>Rating</dt>
            <dd className="bi bi-star-fill text-success" key={prod.rating.rate}>{prod.rating.rate}</dd>
          </div>
          <div>
          <button className="btn btn-danger w-100" key={prod.id} id={prod.id} onClick={cartbutton} > 
          <span className="bi bi-cart4"/> Add to cart
          </button>
        </div>
        </div>
        
         
       
        )
      }
      </main>
      </div>
      <div className="col-2">
  <button className="btn btn-danger"><span className="bi bi-cart4"></span>cart items</button>
</div>
</div>

</div>
    );
}