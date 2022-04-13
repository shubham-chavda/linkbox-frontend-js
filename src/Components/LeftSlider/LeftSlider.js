import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import { Avatar, Menu } from "antd";
import PropTypes from "prop-types";
import { Sider, SiderMenu } from "./LeftSliderStyles";
import bellIcon from '../../assets/bellIcon.svg'
import chatIcon from '../../assets/chatIcon.svg'


class LeftSlider extends PureComponent {
	state = {
		isCollapsed: false,
		selectedMenu: "dashboard",
	};

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
		this.updateDimensions();
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

	updateDimensions = () => {
		const { innerWidth } = window;
		if (innerWidth < 1000) {
			this.setState({ isCollapsed: true });
		} else {
			this.setState({ isCollapsed: false });
		}
	};

	render() {
		const { isCollapsed, selectedMenu } = this.state;
		const {location} = this.props;

		let menu = (
			<Fragment>
				<Menu.Item key="/" 
				icon={  
					<Avatar src={"https://joeschmoe.io/api/v1/random"} size={35}
					style={{ marginLeft:'-5px',border:'1px solid gray' }} />
				}>
					<Link to="/">Dashboard</Link>
				</Menu.Item>
			
				
				<Menu.Item key="/messages/" icon={<img src={chatIcon} alt="chat" style={{marginLeft:'-5px'}} width="30px" height="30px"/>}>
					<Link to="/messages/">Messages</Link>
				</Menu.Item>
				
				<Menu.Item key="/Notifications/" icon={<img src={bellIcon}  alt="notification" style={{marginLeft:'-5px'}} width="30px" height="30px"/>}>
					<Link to="/Notifications/">Notifications</Link>
				</Menu.Item>
			</Fragment>
		);

		return (
			<Sider
				theme="light"
				collapsed={true}
			>
					{/* <StrongName>{isCollapsed ? "PS" : "LinkBox"}</StrongName> */}
				<SiderMenu
					theme="light"
					mode="inline"
					
					defaultSelectedKeys={[selectedMenu]}
					// selectedKeys={[location.pathname]}
				>
					{menu}
				</SiderMenu>
			</Sider>
		);
	}
}

LeftSlider.propTypes = {
	location: PropTypes.object.isRequired,
	isFullScreen: PropTypes.bool.isRequired,
	showRegister: PropTypes.bool.isRequired,
};

// const mapStateToProps = state => ({
// });

export default LeftSlider;
