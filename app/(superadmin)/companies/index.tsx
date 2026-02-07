import { View, Text, TextInput, ScrollView, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import StatusBadge from '@/components/ui/StatusBadge';

const COMPANIES_DATA = [
    { id: '1', name: 'ABC Infrastructure Pvt Ltd', status: 'active', created: '12 Aug 2025', admin: 'Rajesh Sharma' },
    { id: '2', name: 'ABC Infrastructure Pvt Ltd', status: 'suspended', created: '12 Aug 2025', admin: 'Rajesh Sharma' },
    { id: '3', name: 'ABC Infrastructure Pvt Ltd', status: 'active', created: '12 Aug 2025', admin: 'Rajesh Sharma' },
    { id: '4', name: 'ABC Infrastructure Pvt Ltd', status: 'active', created: '12 Aug 2025', admin: 'Rajesh Sharma' },
];

const CompaniesListScreen = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const renderItem = ({ item }: { item: typeof COMPANIES_DATA[0] }) => (
        <View className="bg-white p-5 rounded-2xl mb-4 shadow-sm border border-gray-100">
            <View className="flex-row justify-between items-start">
                <View className="flex-1">
                    <Text className="text-[16px] font-bold text-black">{item.name}</Text>
                    <Text className="text-[12px] text-[#6E6E6E] mt-1">Created On: {item.created}</Text>
                    <Text className="text-[12px] text-[#6E6E6E]">Company Admin: {item.admin}</Text>
                </View>
                <StatusBadge status={item.status as any} />
            </View>
            <TouchableOpacity
                className="mt-4"
                onPress={() => router.push({ pathname: '/(superadmin)/companies/[id]', params: { id: item.id } })}
            >
                <Text className="text-[#A52A2A] text-[12px] font-bold underline">View company</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="bg-[#A52A2A] p-4 flex-row items-center">
                <TouchableOpacity onPress={() => router.back()} className="mr-4">
                    <IconSymbol name="chevron.left" size={24} color="white" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold">Company details</Text>
            </View>

            <View className="flex-1 p-6">
                {/* Search Bar */}
                <View className="bg-gray-100 rounded-xl flex-row items-center px-4 py-1 mb-6">
                    <IconSymbol name="magnifyingglass" size={18} color="#6E6E6E" />
                    <TextInput
                        placeholder="Search Companies"
                        className="flex-1 ml-2 py-3"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <IconSymbol name="mic.fill" size={18} color="#6E6E6E" />
                </View>

                <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-black font-bold text-lg">Companies List</Text>
                    <TouchableOpacity className="border border-gray-300 px-3 py-1 rounded-lg flex-row items-center">
                        <Text className="text-[#6E6E6E] mr-1">Filter</Text>
                        <IconSymbol name="line.3.horizontal.decrease" size={14} color="#6E6E6E" />
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={COMPANIES_DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            </View>

            {/* FAB */}
            <TouchableOpacity
                className="absolute bottom-6 right-6 bg-[#A52A2A] w-14 h-14 rounded-full items-center justify-center shadow-lg"
                onLongPress={() => { }} // Workaround for possible conflicts
                onPress={() => router.push('/(superadmin)/companies/create')}
            >
                <IconSymbol name="plus" size={30} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CompaniesListScreen;
