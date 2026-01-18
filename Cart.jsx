import { useState } from "react";

function Cart({ cart }) {
  const [ordered, setOrdered] = useState(false);
  const total = cart.reduce((sum, i) => sum + i.price, 0).toFixed(2);

  if (ordered) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>✅ Order Placed Successfully!</h2>
        <p>Thank you for shopping!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Cart Summary</h2>

      {cart.map((item, i) => (
        <div key={i} className="cart-item">
          <span>{item.title}</span>
          <span>${item.price}</span>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>Total: ${total}</h3>
          <button className="order-btn" onClick={() => setOrdered(true)}>
            Place Order
          </button>
        </>
      )}

      {cart.length === 0 && <p>Your cart is empty.</p>}
    </div>
  );
}

export default Cart;
