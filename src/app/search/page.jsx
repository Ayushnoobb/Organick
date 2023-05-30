"use client"
import React , {useContext,useState,useEffect} from "react";
import { ProductContext } from "@/lib/productContext";


export default function Search(props) {
  const [allProducts , setProducts] = useState([])
  const products = useContext(ProductContext) || [];
  const para = Object.keys(props.searchParams);
  
  useEffect(() => {
    setProducts( products.products);
    console.log(allProducts)

  },[])


    if (allProducts.length < 1){
      return(
        <>loading...</>
      )
    }

  let counter = 0 ; 
  return(
    allProducts.map((product)=>{
      const {title, category, brand} = product;

      // regex to check products
      let regEc = new RegExp(`${para[0].toLowerCase()}`);

      // checking if product category,title,brand matches params
      if(title.toString().toLowerCase().match(regEc) || category.toString().toLowerCase().match(regEc) || brand.toString().toLowerCase().match(regEc)) {
        counter ++ ;
        return(
          <h3 key={product.id}>{title}</h3>
        )
      }
      {if(counter == 0){
        return(
          <>
            Nothing to show
          </>
        )
      }
    }
    })
  )

}

export async function getSeverSideProps(params) {
  return {
    props: {
      param: params.query, //pass it to the page props
    },
  };
}
