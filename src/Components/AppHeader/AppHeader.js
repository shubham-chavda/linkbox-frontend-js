import React from "react";
import {
	Row, Col, Avatar, Menu,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LogoutOutlined } from "@ant-design/icons";
import {
	StyledHeader, StrongName,
} from "./AppHeaderStyles";
import { LogOutUser } from "../../actions/action";

const getInital = (name) => name?.charAt(0);

const AppHeader = () => {
	const userDetails = useSelector((state) => state.toJS().root.userDetails);
	const inital = getInital(userDetails.firstName);
	const dispatch = useDispatch();
	const logout = () => {
		dispatch(LogOutUser());
	};

	return (
		<StyledHeader>
			<Row gutter={14} width="100%" justify="end">
				<Col>
						<div style={{display: 'flex', justifyContent:'center',alignItems: 'center'}}>

							<Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{inital}</Avatar>
							<StrongName style={{display: 'flex',fontSize: '15px'}}>
								{userDetails.firstName}
							</StrongName>
							<Menu>
								<Menu.Item key="logout" icon={<LogoutOutlined />} onClick={logout}>
								Logout
								</Menu.Item>
							</Menu>
						</div>

				</Col>

			</Row>
		</StyledHeader>
	);
};

export default AppHeader;
