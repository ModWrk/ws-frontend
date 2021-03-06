import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled,{ ThemeProvider, injectGlobal} from 'styled-components';

const theme = {
    black: '#10152a',
    greyMid: '#939191',
    greyLight: '#e2e7e7',
    primary: '#20376a',
    primaryMid: '#61658c',
    primaryLight: '#c1c0d0',
    primaryAccent: '',
    primaryAccentMid: '',
    secondary: '#deba42',
    secondaryMid: '',
    secondaryLight: '',
    secondaryAccent: '',
    secondaryAccentMid: '',
    secondaryAccentLight: '',
    maxWidth: '1200px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0,.09)',
};

const StyledPage = styled.div`
    background: white;
    color: black;

`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};;
    margin: 0 auto;
    padding: 2rem;
`;
injectGlobal`
    @font-face {
        font-family: 'Volkhov';
        src: url('/static/Volkhov-Regular.ttf')
        format('ttf');
        font-weight: normal;
        font-style:normal;
    }
    @font-face {
        font-family: 'Volkhov-Bold';
        src: url('/static/FiraSans-Bold.ttf')
        format('ttf');
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
        font-family: 'Yesteryear';
        src: url('/static/Yesteryear.ttf')
        format('ttf');
        font-weight: bold;
        font-style: normal;
    }

    html {
        box-sizing: border-box;
        font-size: 16px;
    }
    *, *:before *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Volkhov',serif;
    }

    h1, h2, h3, h4 {
        font-family: 'Yesteryear', cursive;
    }

    
    a {
        text-decoration: none;
        color: ${theme.black};
    }

`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme = { theme }>
                <StyledPage>
                    <Meta />
                    <Header />
                    <Inner>{this.props.children}</Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;