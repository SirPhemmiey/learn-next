import Header from './Header';
import styled from 'styled-components';

const LayoutDiv = styled.div`
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
`;

const Layout = props => (
    <LayoutDiv>
        <Header />
        {props.children}
    </LayoutDiv>
);

export default Layout;