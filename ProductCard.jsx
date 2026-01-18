function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <h4>{product.title}</h4>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;