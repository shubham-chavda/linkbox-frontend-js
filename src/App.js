import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import {Router, Route,Switch } from "react-router-dom";

// import { getUserDetails } from "./actions/action";
import NotFound from "./Components/NotFound";
// import Routes from "./Routes";
import Wrapper from "./AppStyles";
import Login from "./Scenes/Login/Login";
import Spinner from "./Components/Spinner/Spinner";
import 'antd/dist/antd.css';
import history from "./History";
import Home from "./Scenes/Home/Home";

class App extends Component {
	componentDidMount() {
		// this.props.getUserDetails();
	}
	render() {
		if (this.props.globalLoader) {
			return (
				<Wrapper>
					<Spinner />
				</Wrapper>
			);
		}
		return (
				<Router history={history}>
					<Switch>
					<Route exact path="/" component={Login} />
					{/* <Route exact path="/" component={Dashboard} /> */}
					<Route path="*" component={NotFound} />
					</Switch>
				</Router>
		);
	}
}

App.propTypes = {
	// getUserDetails: PropTypes.func.isRequired,
	// globalLoader: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	// globalLoader: state.getIn(["root", "globalLoader"]),
});

const mapDispatchToProps = dispatch => ({
	// getUserDetails: () => dispatch(getUserDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
