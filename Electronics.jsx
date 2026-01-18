import ProductCard from "./ProductCard";

function Electronics({ products, search, addToCart }) {
  const filtered = products
    .filter(p => p.category === "electronics")
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="product-grid">
      {filtered.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Electronics;
