


const Navbar = () => {
    return (
      <header className="navbar">
        <div className="logo">
          <img src="../src/assets/logo.png" alt="Logo" />
        </div>
        <nav>
          <button className='styled-button'>Productos</button>
          <button className='styled-button'>Servicios</button>
          <button className='styled-button'>Contacto</button>
        </nav>
        <div className="cart">
          <button className='styled-button'>
            🛒 Carrito
          </button>
        </div>
      </header>
    );
  };

  export default Navbar;