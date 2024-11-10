import axios from "axios"
import { useEffect,useState  } from "react";
import Style from "./Home.module.css"
import { Link } from "react-router-dom";


export default function Home (){


    
    const [allProducts, setProducts] = useState([]);

    async function getApi(){
        try {
            let {data} = await axios.get('https://fakestoreapi.com/products');
        
            setProducts(data);
            
        } catch (error) {
            alert("Error fetching data: ", error);
        }
    }
            

    useEffect(()=>{
        getApi();
    },[])


    return <>
    <h1 className="m-3" style={{fontSize:"14px", color:"rgba(0,0,0,0.4"}}> <span style={{fontSize:"30px",color:"black"}} >Results</span> <br />
    Check each product page for other purchasing options. Price and other details may vary depending on product size and color.</h1>

    <div className="row  " style={{width:"90%",margin:' auto'}}>
            
            {allProducts.map((item , ind)=>
                <div className="col-md-3 card text-center mt-4"  key={ind}>
                    <img style={{height:"350px"}} src={item.image} alt="product-image" className="card-img-top" />
                    <h3  className={Style.itemTitle}>{item.title}</h3>
                     <h4 style={{fontSize:"13px",color:"rgba(0,0,0,0.5"}}>{item.description}</h4> 
                    <h5 >{item.price}$</h5>
                    <h5>{item.rating.rate}<i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </h5>
                  
                    <button style={{fontSize:"17px",fontWeight:"500"}} className="btn btn-primary "><i style={{color:"white", fontSize:"18px"}} className="fa-solid  fa-cart-plus"></i>Add to cart</button>
                
                    </div>
      
      )}  
       
         
        </div>
        
        
    </>
}