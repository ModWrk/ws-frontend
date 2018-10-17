import Nav from './Nav';
import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
    console.log('onRouteChangeStart Triggered');
}
Router.onRouteChangeComplete = () => {
    console.log('onRouteChangeComplete Triggered');
}
Router.onRouteChangeError = () => {
    console.log('onRouteChangeError Triggered')
}

const Logo = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
`;


const Header = () => (
    <div>   
        <div className="bar">
            <h1>
                <Link>
                    <a href="">Mod Wrk</a>
                </Link>
            </h1>
            <Nav />
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>Cart</div>
    </div>
);

export default Header;