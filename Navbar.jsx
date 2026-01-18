import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar({ search, setSearch, cartCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">MyStore</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <ul className="nav-links">
        <li><Link to="/">All</Link></li>
        <li><Link to="/electronics">Electronics</Link></li>
        <li><Link to="/kids">Kids</Link></li>
        <li><Link to="/grocery">Grocery</Link></li>
        <li><Link to="/cart">Cart ({cartCount})</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
