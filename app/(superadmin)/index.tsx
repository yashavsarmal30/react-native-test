import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import CircularProgress from '@/components/ui/CircularProgress';
import { IconSymbol } from '@/components/ui/IconSymbol';

const DashboardScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View className="bg-[#A52A2A] p-6 pb-12 rounded-b-[40px]">
                    <View className="flex-row justify-between items-center mt-4">
                        <View>
                            <Text className="text-white text-3xl font-bold">WELCOME BACK,</Text>
                            <Text className="text-white text-xl">Person Name</Text>
                            <Text className="text-white/80 text-sm">Super Admin</Text>
                        </View>
                        <View className="bg-white/20 p-2 rounded-full">
                            <IconSymbol name="bell.fill" size={24} color="white" />
                        </View>
                    </View>
                </View>

                {/* Stats Section */}
                <View className="px-6 -mt-8 flex-row justify-between">
                    <View className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex-1 mr-2 items-center">
                        <Text className="text-3xl font-bold text-[#A52A2A]">200</Text>
                        <Text className="text-[10px] text-[#6E6E6E] font-medium mt-1">Active Companies</Text>
                    </View>
                    <View className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex-1 ml-2 items-center">
                        <Text className="text-3xl font-bold text-[#A52A2A]">34</Text>
                        <Text className="text-[10px] text-[#6E6E6E] font-medium mt-1">Suspended Companies</Text>
                    </View>
                </View>

                {/* Progress Chart */}
                <View className="px-6 mt-6">
                    <View className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 items-center">
                        <CircularProgress
                            progress={0.7}
                            totalValue="234"
                            label="Total Companies Registered"
                        />
                    </View>
                </View>

                {/* Total Users/Projects */}
                <View className="px-6 mt-6 flex-row justify-between">
                    <View className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex-1 mr-2">
                        <Text className="text-xl font-bold text-black text-center">1,362</Text>
                        <Text className="text-[10px] text-[#6E6E6E] text-center">Total users</Text>
                    </View>
                    <View className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex-1 ml-2">
                        <Text className="text-xl font-bold text-black text-center">312</Text>
                        <Text className="text-[10px] text-[#6E6E6E] text-center">Active projects</Text>
                    </View>
                </View>

                {/* Total Revenue */}
                <View className="px-6 mt-4">
                    <View className="bg-[#F5E6D3] flex-row justify-between items-center p-4 rounded-2xl">
                        <Text className="text-[#A52A2A] font-medium">Total revenue (this month)</Text>
                        <Text className="text-[#A52A2A] text-xl font-bold">₹4,80,000</Text>
                    </View>
                </View>

                {/* System Alerts */}
                <View className="px-6 mt-8 mb-20">
                    <View className="flex-row justify-between items-center mb-4">
                        <View className="flex-row items-center">
                            <Text className="text-[#A52A2A] text-lg font-bold mr-2">System alerts</Text>
                            <IconSymbol name="exclamationmark.triangle.fill" size={16} color="#A52A2A" />
                        </View>
                        <TouchableOpacity>
                            <Text className="text-[#A52A2A] text-sm">View all</Text>
                        </TouchableOpacity>
                    </View>

                    {[
                        { title: 'New Company Created', desc: 'Seated Contractors Pvt Ltd registered successfully', date: '18 Jan' },
                        { title: 'Company Suspended', desc: 'Re-infra Pvt Ltd suspended due to policy violation', date: '16 Jan' },
                        { title: 'Inactive Company Warning', desc: 'Skyline Builders has been inactive for 15 days', date: '2h ago' },
                    ].map((alert, idx) => (
                        <View key={idx} className="flex-row justify-between items-start py-3 border-b border-gray-100">
                            <View className="flex-1 pr-4">
                                <Text className="font-bold text-black">{alert.title}</Text>
                                <Text className="text-xs text-[#6E6E6E] mt-1">{alert.desc}</Text>
                            </View>
                            <Text className="text-xs text-[#6E6E6E]">{alert.date}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DashboardScreen;
