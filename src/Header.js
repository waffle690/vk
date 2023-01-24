import './Header.css';
import Categories from './Cat.js';
import Posti from './Posti.js';

function Header() {
    return (
        <header>
            <Posti/>
            <Categories/>
        </header>
    );
  }
  
export default Header;