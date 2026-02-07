import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import CompanyListScreen from '../screens/company/CompanyListScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { colors } from '../constants/colors';
import { TabParamList } from '../types';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any;

                    if (route.name === 'Dashboard') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Companies') {
                        iconName = focused ? 'business' : 'business-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.secondary,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopColor: colors.border,
                    height: 60,
                    paddingBottom: 10,
                },
            })}
        >
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Companies" component={CompanyListScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};
