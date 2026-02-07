import { Tabs } from 'expo-router';
import React from 'react';
import { View, Platform } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function SuperAdminLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#A52A2A',
                headerShown: false,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: 'absolute',
                        borderTopWidth: 0,
                        elevation: 0,
                        height: 90,
                    },
                    default: {
                        height: 70,
                        paddingBottom: 10,
                    },
                }),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Dashboard',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="companies/index"
                options={{
                    title: 'Companies',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="building.2.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile/index"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
                }}
            />
            {/* Hidden Screens */}
            <Tabs.Screen name="companies/create" options={{ href: null }} />
            <Tabs.Screen name="companies/[id]" options={{ href: null }} />
            <Tabs.Screen name="companies/suspend" options={{ href: null }} />
            <Tabs.Screen name="profile/edit" options={{ href: null }} />
            <Tabs.Screen name="profile/change-password" options={{ href: null }} />
        </Tabs>
    );
}
