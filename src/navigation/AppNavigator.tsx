import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './TabNavigator';
import LoginScreen from '../screens/auth/LoginScreen';
import CompanyDetailsScreen from '../screens/company/CompanyDetailsScreen';
import CreateCompanyScreen from '../screens/company/CreateCompanyScreen';
import SuspendCompanyScreen from '../screens/company/SuspendCompanyScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import ChangePasswordScreen from '../screens/profile/ChangePasswordScreen';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabs" component={TabNavigator} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="CompanyDetails" component={CompanyDetailsScreen} />
            <Stack.Screen name="CreateCompany" component={CreateCompanyScreen} />
            <Stack.Screen name="SuspendCompany" component={SuspendCompanyScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
            <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        </Stack.Navigator>
    );
};
