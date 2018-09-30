import React from 'react';
import { Router, Actions, Stack, Scene } from 'react-native-router-flux';
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';
import CreateNewOrder from './components/newOrder/CreateNewOrder';
import TimeAndPlace from './components/newOrder/TimeAndPlace';
import DropOff from './components/newOrder/DropOff';
import OrderSummery from './components/newOrder/OrderSummery';
import Congratulations from './components/newOrder/Congratulations';

const RouterComponent = () => {
	return (
		<Router>
			<Stack key="root" hideNavBar>
				<Stack key="auth" hideNavBar>
					<Scene key="login" component={LogIn} initial />
				</Stack>
				<Stack key="main" hideNavBar>
					<Scene key="dashboard" component={Dashboard} initial />
					<Scene key="createNewOrder" component={CreateNewOrder} />
					<Scene key="timeAndPlace" component={TimeAndPlace} />
					<Scene key="dropOff" component={DropOff} />
					<Scene key="orderSummery" component={OrderSummery} />
					<Scene key="congratulations" component={Congratulations} />
				</Stack>
			</Stack>
		</Router>
	);
};

export default RouterComponent;
