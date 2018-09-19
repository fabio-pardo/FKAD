import React from 'react';
import { Router, Actions, Stack } from 'react-native-router-flux';
import LogIn from './components/LogIn';

const RouterComponent = () => {
	return (
		<Router>
			<Stack key="root" hideNavBar>
				<Stack key="auth" hideNavBar>
					<Stack key="login" component={LogIn} initial />
				</Stack>
			</Stack>
		</Router>
	);
};

export default RouterComponent;
// <Stack key="main">
// 	<Stack
// 		rightTitle="Add"
// 		onRight={() => {
// 			Actions.employeeCreate();
// 		}}
// 		key="employeeList"
// 		component={EmployeeList}
// 		title="Employees"
// 		initial
// 	/>
// 	<Stack
// 		key="employeeCreate"
// 		component={EmployeeCreate}
// 		title="Create Employee"
// 	/>
// 	<Stack
// 		key="employeeEdit"
// 		component={EmployeeEdit}
// 		title="Edit Employee"
// 	/>
// </Stack>
