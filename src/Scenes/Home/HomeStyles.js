
import { Col,Row } from "antd";
import styled from "styled-components";


export const MainContainer = styled.div`
    height: 100vh;
`;
export const HeaderContainer = styled(Row)`
    /* height:5%; */
    border-bottom: 1px solid #E3ECF3;

`
export const HeaderHome = styled(Col)`
    width: 4%;
    border-right: 1px solid #E3ECF3;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const HeaderFileTab= styled(Col)`
    border-right: 1px solid #E3ECF3;
`;