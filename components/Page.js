import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled,{ ThemeProvider, injectGlobal} from 'styled-components';

const theme = {
    black: '#29323F',
    
}

const StyledPage = styled.div`
    background: white;
    color: black;

`;

const Inner = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
`;

class Page extends Component {
    render() {
        return (
            <StyledPage>
                <Inner>
                    <Meta />
                    <Header />
                    {this.props.children}
                </Inner>
            </StyledPage>
        );
    }
}

export default Page;