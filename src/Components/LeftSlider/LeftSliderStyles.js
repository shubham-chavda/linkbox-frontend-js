import styled from "styled-components";
import { Layout, Menu } from "antd";

export const Sider = styled(Layout.Sider)`
	&& {
		padding-top:20px;
		height: 100vh;
		z-index: 100;
		&& .ant-menu-item-selected {
			background: #3973e6;
		}
		&& .ant-menu-dark .ant-menu-inline.ant-menu-sub {
			background: #0f1012;
		}
		&& .ant-layout-sider-trigger{
			height:40px;
		}
	}
`;

export const SiderMenu = styled(Menu)`
	&& {
		border:none !important;
    height: calc(100% - 57px);
		overflow: overlay;

		&& .ant-menu-item{
			margin-bottom:30px;
		}
	}
`;

export const StrongName = styled.div`
	padding: 0 1.5rem;
	border-bottom: 0.5px solid #333;
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
`;
