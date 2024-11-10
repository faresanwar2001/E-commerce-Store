
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Style from '../Categories/Categories.module.css'
import axios from 'axios';


export default function Categories(){

    const [allCategories, setCategories] = useState([]);

    async function getCategories(){
        try {
            let {data} = await axios.get('https://api.escuelajs.co/api/v1/categories');
        
            setCategories(data);
            
        } catch (error) {
            alert("Error fetching data: ", error);
        }
    }

    useEffect(()=>{
        getCategories();
    },[])




    return<>
    
    
    <h1 className="m-5" style={{fontSize:"14px", color:"rgba(0,0,0,0.4"}}> <span style={{fontSize:"22px",color:"black"}} >Results</span> <br />
    Check each product page for other purchasing options. Price and other details may vary depending on product size and color.</h1>

    <div className="row  " style={{width:"90%",margin:'auto'}}>
            
            {allCategories.map((cat , ind)=>
                <div className="col-md-3 card text-center mb-5"   key={ind}>
                    
                    <h3  className={Style.itemTitle}>{cat.Electronics}</h3>
                    <img src={cat.image} alt="product-img" />
                    <h3  >{cat.creationAt}</h3>
                    <h3  >{cat.updatedAt}</h3>
               
                
                    </div>
      
      )}  
         
        </div>
        
    

    </>
}