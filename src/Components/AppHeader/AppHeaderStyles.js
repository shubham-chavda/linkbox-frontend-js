import styled from "styled-components";
import { Layout, Avatar, Select } from "antd";

export const StyledHeader = styled(Layout.Header)`
	position: absolute;
	height: 60px;
  	width: 100%;
	background: #fff;
	padding: 0 40px;
	box-shadow: #ddd 0px 0px 10px 0px;
	z-index: 50;
`;

export const UserAvatar = styled(Avatar)`
	color: #f56a00;
	background-color: #fde3cf;
`;
export const StrongName = styled.div`
	font-weight:400;
	padding:0 10px;
	font-size: 17px;
`;
export const SearchMenu = styled(Select)`
	width: 270px;
	margin-right:5px;
`;
export const HeaderUserInfo = styled.div`
	${UserAvatar} {
    	border:  ${(props) => (props.isDropDown ? '1px solid #f56a00 ' : '0px')}
  }
`;
