import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            {/* Hamburger Menu moved to the left before the logo */}
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>E-Commerce</p>
            </div>

            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li onClick={() => { setMenu("shop"); toggleMenu(); }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("lock"); toggleMenu(); }}>
                    <Link style={{ textDecoration: 'none' }} to='/lock'>Locks</Link>
                    {menu === "lock" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("tool"); toggleMenu(); }}>
                    <Link style={{ textDecoration: 'none' }} to='/tool'>Tools</Link>
                    {menu === "tool" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("accesory"); toggleMenu(); }}>
                    <Link style={{ textDecoration: 'none' }} to='/accesory'>Accesories</Link>
                    {menu === "accesory" ? <hr /> : <></>}
                </li>
                <li onClick={toggleMenu}>
                    <Link style={{ textDecoration: 'none' }} to='/login'>Login</Link>
                </li>
            </ul>

            <div className="nav-login-cart">
                <Link to='cart'>
                    <img src={cart} alt="" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
