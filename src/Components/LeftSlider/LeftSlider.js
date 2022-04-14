import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { AvatarImg, Sider, SiderMenu } from "./LeftSlider.style";
import bellIcon from '../../assets/bellIcon.svg'
import chatIcon from '../../assets/chatIcon.svg'


class LeftSlider extends PureComponent {
	// state = {
	// 	isCollapsed: false,
	// 	selectedMenu: "dashboard",
	// };

	// componentDidMount() {
	// 	window.addEventListener("resize", this.updateDimensions);
	// 	this.updateDimensions();
	// }
	// componentWillUnmount() {
	// 	window.removeEventListener("resize", this.updateDimensions);
	// }

	// updateDimensions = () => {
	// 	const { innerWidth } = window;
	// 	if (innerWidth < 1000) {
	// 		this.setState({ isCollapsed: true });
	// 	} else {
	// 		this.setState({ isCollapsed: false });
	// 	}
	// };

	render() {
		// const { isCollapsed, selectedMenu } = this.state;
		// const {location} = this.props;

		let menu = (
			<Fragment>
				<Menu.Item key="/" 
				icon={  
					<AvatarImg src={"https://joeschmoe.io/api/v1/random"} size={30}/>
				}>
					<Link to="/">Dashboard</Link>
				</Menu.Item>
			
				
				<Menu.Item key="/messages/" 
					icon={<img src={chatIcon} alt="chat"  width="25px" height="25px"/>}>
					<Link to="/messages/">Messages</Link>
				</Menu.Item>
				
				<Menu.Item key="/Notifications/" 
					icon={<img src={bellIcon}  alt="notification"  width="25px" height="25px"/>}>
					<Link to="/Notifications/">Notifications</Link>
				</Menu.Item>
			</Fragment>
		);

		return (
			<Sider
				theme="light"
				collapsed={true}
			>
					{/* <StrongName>{isCollapsed ? "LB" : "LinkBox"}</StrongName> */}
				<SiderMenu
					theme="light"
					mode="inline"
					
					// defaultSelectedKeys={[selectedMenu]}
					// selectedKeys={[location.pathname]}
				>
					{menu}
				</SiderMenu>
			</Sider>
		);
	}
}

// LeftSlider.propTypes = {
	
// };

// const mapStateToProps = state => ({
// });

export default LeftSlider;
