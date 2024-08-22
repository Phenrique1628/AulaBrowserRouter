import { Link } from "react-router-dom"


export default function Header() {
return (
    <div class="Header">
        <header>
            <ul>
                <nav class="container-menu">
                    <Link to="/">
                        <li class="menu">Home</li>
                    </Link>

                    <Link to="/produto">
                        <li class="menu">Produtos</li>
                    </Link>

                    <Link to="/oferta">
                        <li class="menu">Ofertas</li>
                    </Link>
                </nav>
            </ul>
        </header>
    </div>
 );
}