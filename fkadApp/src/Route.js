import React from 'react';
import { Router, Actions, Stack, Scene } from 'react-native-router-flux';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard';
import CreateNewOrder from './components/newOrder/CreateNewOrder';
import TimeAndPlace from './components/newOrder/TimeAndPlace';
import DeliverTo from './components/newOrder/DeliverTo';
import OrderSummery from './components/newOrder/OrderSummery';
import Congratulations from './components/newOrder/Congratulations';

const RouterComponent = () => {
	return (
		<Router>
			<Stack key="root" hideNavBar>
				<Stack key="auth" hideNavBar>
					<Scene key="login" component={LogIn} initial />
					<Scene key="signup" component={SignUp} />
				</Stack>
				<Stack key="main" hideNavBar>
					<Scene key="dashboard" component={Dashboard} initial />
					<Scene key="createNewOrder" component={CreateNewOrder} />
					<Scene key="timeAndPlace" component={TimeAndPlace} />
					<Scene key="deliverTo" component={DeliverTo} />
					<Scene key="orderSummery" component={OrderSummery} />
					<Scene key="congratulations" component={Congratulations} />
				</Stack>
			</Stack>
		</Router>
	);
};

export default RouterComponent;
