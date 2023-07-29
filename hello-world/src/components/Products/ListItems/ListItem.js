import { useState } from "react";
import AddToCartIcon from "../../../assets/icons/add_cart.svg";
import Modal from "../../UI/modal";
import { useDispatch, useSelector } from "react-redux";
import { addItemHandler, removeItemHandler } from "../../../actions";

const ListItems=({data, updateItemTitle})=>{

    const item = useSelector(state=>state.items.find(item=>item.id === data.id))
    const dispatch=useDispatch()

    // const [counter,setCounter]=useState(0);
    const increaseCounterByOne = (event) => {
        event.stopPropagation()
        dispatch(addItemHandler(data))
        // dispatch({
        //     type:"ADD_ITEM",
        //     payload:{
        //         item:data
        //     }
        // })
        // onAdd(data.id)
        // setCounter(counter+1)
    }
    
    const decreaseCounterByOne = (event) => {
        event.stopPropagation()
        dispatch(removeItemHandler(data.id))
        // dispatch({
        //     type:"REMOVE_ITEM",
        //     payload:{
        //         id: data.id
        //     }
        // })
        // onRemove(data.id);
        
        // if(counter === 0) {
        //     return;
        // }
        // if(counter==1){
        //     onRemove(data.id);
        // }
        // setCounter(counter-1)
    }
    const [showModal,setShowModal]=useState(false)
    const handleModal=()=>{
        setShowModal(previousState=>!previousState)
    }

   

return (
    <>
    <div onClick={handleModal} className={"item-card"}>
        <img  className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}></img>
        <div className={"item-card__information"}>
            <div className={"pricing"}>
                <span>₹{data.discountedPrice}</span>
                <small>
                    <strike>₹{data.price}</strike>
                </small>
            </div>
            <div className={"title"}>
                <h3>{data.title}</h3>
            </div>
        </div>
        {/* <button onClick={()=>updateItemTitle(data.id)}>Update the title</button> */}
        {
            !item || item?.quantity<1?
            <button className={"cart-add"} onClick={increaseCounterByOne}>
            <span> Add To Card</span>
            <img src={AddToCartIcon} alt="Cart Icon"></img>
        </button>:
        <div className="cart-addon">
                    <button onClick={decreaseCounterByOne}><span>-</span></button>
                    <span>{item.quantity}</span>
                    <button onClick={increaseCounterByOne}><span>+</span></button>
                </div>



        }
        
    </div>
    {
        showModal && 
        <Modal onClose={handleModal}>

        <div  className="item-card__modal">
            <div className="img-wrap">
            <img  className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}></img>

            </div>
            <div className="meta">
            <h3>{data.title}</h3>
            <div className={"pricing"}>
                <span>₹{data.discountedPrice}</span>
                <small>
                    <strike>₹{data.price}</strike>
                </small>
            </div>
            <p>{data.description}</p>

            {
            !item || item?.quantity<1?
            <button className={"cart-add card-add__modal"} onClick={increaseCounterByOne}>
            <span> Add To Card</span>
            <img src={AddToCartIcon} alt="Cart Icon"></img>
        </button>:
        <div className="cart-addon card-addon__modal">
                    <button onClick={decreaseCounterByOne}><span>-</span></button>
                    <span>{item.quantity}</span>
                    <button onClick={increaseCounterByOne}><span>+</span></button>
                </div>



        }
            

            </div>
            
        </div>
        </Modal>
        
        
        }
    </>
)

}

export default ListItems;