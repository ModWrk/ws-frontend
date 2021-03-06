import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
    <NavStyles>  
        <Link href="/sell">
            <a>shop</a>
        </Link>
        <Link href="/items">
            <a>items</a>
        </Link>
        <Link href="/signup">
            <a>signup</a>
        </Link>
        <Link href="/orders">
            <a>orders</a>
        </Link>
        <Link href="/me">
            <a>Account</a>
        </Link>
    </NavStyles>
);

export default Nav;