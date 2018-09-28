import React from 'react';
import { Router, Actions, Stack } from 'react-native-router-flux';
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';
import CreateNewOrder from './components/newOrder/CreateNewOrder';
import TimeAndPlace from './components/newOrder/TimeAndPlace';
import DeliverTo from './components/newOrder/DeliverTo';
import OrderSummery from './components/newOrder/OrderSummery';

const RouterComponent = () => {
	return (
		<Router>
			<Stack key="root" hideNavBar>
				<Stack key="auth" hideNavBar>
					<Stack key="login" component={LogIn} initial />
				</Stack>
				<Stack key="main" hideNavBar>
					<Stack key="dashboard" component={Dashboard} initial />
					<Stack key="createNewOrder" component={CreateNewOrder} />
					<Stack key="timeAndPlace" component={TimeAndPlace} />
					<Stack key="deliverTo" component={DeliverTo} />
					<Stack key="orderSummery" component={OrderSummery} />
				</Stack>
			</Stack>
		</Router>
	);
};

export default RouterComponent;
