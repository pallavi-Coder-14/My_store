import ProductCard from "./ProductCard";

function Grocery({ products, search, addToCart }) {
  const filtered = products
    .filter(p => p.category.includes("jewelery"))
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="product-grid">
      {filtered.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Grocery;
