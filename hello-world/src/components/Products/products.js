import { useEffect, useState } from "react"
import ListItems from "./ListItems/ListItem"
import axios from "axios";
import Loader from "../UI/loader";
import { useLocation, useNavigate, useParams,  } from "react-router-dom";



const Products = () =>{
    const [items,setItems]=useState([])
    const [loader,setLoader]=useState(true);
    const params=useParams()
    const history = useNavigate()
    const {search} = useLocation()
    
    const  queryParams = new URLSearchParams(search).get("search")

    


    useEffect(()=>{
   
    async function fecthItems(){

        try{
            let slug=`items.json`
            if(params.category){
                slug=`items-${params.category}.json`
            }
            // items-category-1.json

            if(queryParams){
                slug +=`?search=$(queryParams)`
            }

            const response= await axios.get(`https://mock-75d67-default-rtdb.firebaseio.com/${slug}`)
       const data=response.data;

       if(!data){
        handleNotFound();
        return
       }
       const transformData=data.map((item,index)=>{
        return{
            ...item,
            // quantity:0,
            id:index
        }
       })

       setItems(transformData);

        }
        catch (error){
            console.log("error is :",error);
            alert("something is wrong");

        }
        finally{
            setLoader(false);
        }
       
      
    }

    fecthItems();
    return () =>{
        setItems([])
        setLoader(true)

    }
    
    },[params.category, queryParams])

    const handleNotFound = ()=>{
        history("/404")
       
    }

    
   
    return (
        <>
    <div className={"product-list"}>
    <div className={"product-list--wrapper"}>
   

        {
            items.map(item=>{
              
                return (<ListItems  key={item.id}  data={item} />)
            })
        }


    </div>

   

    </div>
    { loader && <Loader/>}

    </>
    )
}

export default Products