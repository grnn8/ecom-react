import Modal from "./modal"
import OrderSucessImage from "../../assets/icons/order_success.svg"

const OrderSuccessModal =({onClose})=>{
    return(
        <Modal onClose={onClose}>
            <div className="order-container">
                <div className="order-container--success">
                <img src={OrderSucessImage} alt="success" className="img-fluid"/>
                <div className="message">
                    <h1>Order Successfully Placed</h1>
                    <span>Order Id#{Math.random().toString(32).slice(2)}</span>
                </div>
            </div>
            </div>
        </Modal>
    )
}

export default OrderSuccessModal