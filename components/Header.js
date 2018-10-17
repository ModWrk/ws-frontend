import Nav from './Nav'
import Router from 'next/router';
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


const Header = () => (
    <div>   
        <div className="bar">
            <a href="">Mod Wrk</a>
            <Nav />
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>Cart</div>
    </div>
);

export default Header;