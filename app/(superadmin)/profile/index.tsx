import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import CustomButton from '@/components/ui/CustomButton';

const ProfileScreen = () => {
    const router = useRouter();
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="bg-[#A52A2A] p-4 flex-row items-center border-b border-white/10">
                <TouchableOpacity onPress={() => router.back()} className="mr-4">
                    <IconSymbol name="chevron.left" size={24} color="white" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold">Super Admin Profile</Text>
            </View>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                {/* User Stats Card */}
                <View className="px-6 py-8">
                    <View className="flex-row justify-between items-start">
                        <View>
                            <Text className="text-2xl font-bold text-black">Person Name</Text>
                            <Text className="text-[#A52A2A] font-medium">Super Admin</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Text className="text-[10px] text-[#6E6E6E] mr-2">User ID: SYS-ADM-001</Text>
                            <TouchableOpacity
                                className="bg-gray-100 p-2 rounded-full"
                                onPress={() => router.push('/(superadmin)/profile/edit')}
                            >
                                <IconSymbol name="pencil" size={18} color="#6E6E6E" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Info Sections */}
                    <View className="mt-10">
                        <SectionTitle title="Personal Info" />
                        <InfoBox>
                            <InfoRow label="Email" value="rakesh.sharma@abcinfrastructure.com" />
                            <InfoRow label="Password" value="xxxxxxxx" />
                            <InfoRow label="Phone" value="+91 91234 56789" />
                        </InfoBox>

                        <SectionTitle title="Account Info" />
                        <InfoBox>
                            <InfoRow label="User type" value="SUPER_ADMIN" />
                            <InfoRow label="Account created" value="02 Jan 2024" />
                            <InfoRow label="Last Login" value="14 Aug 2025 - 09:12 AM" />
                        </InfoBox>
                    </View>

                    <View className="mt-12 items-center">
                        <CustomButton
                            title="Log Out"
                            variant="primary"
                            className="w-full"
                            onPress={() => setShowLogoutModal(true)}
                        />
                    </View>
                </View>
            </ScrollView>

            {/* Logout Confirmation Dialog (Simulation) */}
            {showLogoutModal && (
                <View className="absolute inset-0 bg-black/50 items-center justify-center p-6">
                    <View className="bg-white rounded-3xl p-8 w-full items-center">
                        <Text className="text-[12px] font-medium text-[#6E6E6E] text-center mb-6">
                            Are you sure you want to log out of your account?
                        </Text>
                        <TouchableOpacity
                            className="bg-[#A52A2A] py-4 px-12 rounded-xl w-full mb-3"
                            onPress={() => router.replace('/sign-in')}
                        >
                            <Text className="text-white font-bold text-center text-lg">Log Out</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShowLogoutModal(false)}>
                            <Text className="text-[#A52A2A] font-bold">Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
};

const SectionTitle = ({ title }: { title: string }) => (
    <View className="mb-2">
        <Text className="text-lg font-bold text-black">{title}</Text>
        <View className="h-[1px] bg-gray-100 mt-1" />
    </View>
);

const InfoBox = ({ children }: { children: React.ReactNode }) => (
    <View className="bg-white border-[0.5px] border-gray-300 rounded-xl p-4 mb-8 shadow-sm">
        {children}
    </View>
);

const InfoRow = ({ label, value }: { label: string, value: string }) => (
    <View className="flex-row justify-between py-2 border-b border-gray-50 last:border-0">
        <Text className="text-[12px] text-[#6E6E6E]">{label}:</Text>
        <Text className="text-[12px] font-bold text-black">{value}</Text>
    </View>
);

export default ProfileScreen;
