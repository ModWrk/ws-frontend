import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
    <NavStyles>  
        <Link href="/watch">
            <a>watch</a>
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
            <a>me</a>
        </Link>
    </NavStyles>
);

export default Nav;