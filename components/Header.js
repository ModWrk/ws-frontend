import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
    NProgress.start();
}
Router.onRouteChangeComplete = () => {
    NProgress.done();
}
Router.onRouteChangeError = () => {
    NProgress.done();
}

const Logo = styled.div`
    margin-left: 1rem;
    position: relative;
    z-index: 2;
    img {
        height: 100px;
        padding: 0.5rem 1rem;
        color: ${props => props.theme.black};
        text-decoration: none;
    }
    @media (max-width: 1000px) {
        margin: 0;
        text-align: center;
        img{
            height: 5rem;
        }
    }
`;

const StyledHeader = styled.div`
    .bar {
        border-bottom: 10px solid ${props => props.theme.primary};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
            justify-content: center;
        }
    }
    .sub-bar {
        display: grid;
        grid-template-columns: auto 1fr;
        border-bottom: 10px solid ${props => props.theme.greyMid};
    }
`;


const Header = () => (
    <StyledHeader>   
        <div className="bar">
            <Logo>
                <Link href="/">
                    <img src="/static/screenKings.svg" alt="Screen Kings Logo"/>
                </Link>
            </Logo>
            <Nav />
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>Cart</div>
    </StyledHeader>
);

export default Header;