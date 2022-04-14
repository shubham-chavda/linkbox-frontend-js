import { Input, Row } from 'antd';
import styled from 'styled-components'

export const ToolBarContainer = styled(Row)`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 18px;
`;


export const SearchButton = styled(Input)`
    border-radius:58px;
    width: 200px;
    padding:10px;
    background:#F5F7F9;
    && .ant-input-affix-wrapper, input.ant-input{
        background:#F5F7F9;
        padding-left: 12px;
    }
   
`;

export const IncDecContainer = styled.div`

    border: 1px solid #F2F2F2;
    border-radius: 58px;
    padding: 5px;
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;
export const SelectContainer = styled.select`
    background: white;
    width: 55px;
    font-size: 14px;
    border: none;
`;