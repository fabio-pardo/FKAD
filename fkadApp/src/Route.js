import React from 'react';
import { Router, Actions, Stack, Scene } from 'react-native-router-flux';
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';
import CreateNewOrder from './components/newOrder/CreateNewOrder';
import TimeAndPlace from './components/newOrder/TimeAndPlace';
import DropOff from './components/newOrder/DropOff';
import OrderSummery from './components/newOrder/OrderSummery';
import Congratulations from './components/newOrder/Congratulations';
import MyOrdersList from './components/myOrders/MyOrdersList';
import ViewOrder from './components/myOrders/ViewOrder';
import Settings from './components/settings/Settings';
import PersonalInfo from './components/settings/PersonalInfo';
import PersonalInfoEdit from './components/settings/PersonalInfoEdit';
import KeyBox from './components/settings/KeyBox';
import KeyBoxEdit from './components/settings/KeyBoxEdit';
import Notifications from './components/settings/Notifications';

const RouterComponent = () => {
	return (
		<Router>
			<Stack key="root" hideNavBar>
				<Stack key="auth" hideNavBar>
					<Scene key="login" component={LogIn} initial />
				</Stack>
				<Stack key="main" hideNavBar>
					<Stack key="newOrder" hideNavBar>
						<Scene
							key="createNewOrder"
							component={CreateNewOrder}
						/>
						<Scene key="timeAndPlace" component={TimeAndPlace} />
						<Scene key="dropOff" component={DropOff} />
						<Scene key="orderSummery" component={OrderSummery} />
						<Scene
							key="congratulations"
							component={Congratulations}
						/>
					</Stack>
					<Stack key="myOrders" hideNavBar>
						<Scene
							key="myOrdersList"
							component={MyOrdersList}
							initial
						/>
						<Scene key="viewOrder" component={ViewOrder} />
					</Stack>
					<Stack key="settings" hideNavBar>
						<Scene
							key="settingsList"
							component={Settings}
							initial
						/>
						<Scene key="personalInfo" component={PersonalInfo} />
						<Scene
							key="personalInfoEdit"
							component={PersonalInfoEdit}
						/>
						<Scene key="keyBox" component={KeyBox} />
						<Scene key="keyBoxEdit" component={KeyBoxEdit} />
						<Scene key="notifications" component={Notifications} />
					</Stack>
				</Stack>
			</Stack>
		</Router>
	);
};

export default RouterComponent;
