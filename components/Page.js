import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled,{ ThemeProvider, injectGlobal} from 'styled-components';

const theme = {
    black: '#1b222d',
    midGrey: '#a8a8a8',
    ltGrey: '#e5e5e5',
    drkBlue: '#1d2f3a',
    midBlue: '#3b4c59',
    ltBlue: '#576270',
    primaryBlue: '#2d5b8c',
    red: '#ef3a34',
    green: '#e3efcd',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0,.09)',
};

const StyledPage = styled.div`
    max-width: ${props => props.theme.maxWidth};
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
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Inner>
                        <Meta />
                        <Header />
                        {this.props.children}
                    </Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;