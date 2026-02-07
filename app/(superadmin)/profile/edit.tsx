import { View, Text, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import CustomInput from '@/components/ui/CustomInput';
import CustomButton from '@/components/ui/CustomButton';

const EditProfileScreen = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: 'Person Name',
        email: 'rakesh.sharma@abcinfrastructure.com',
        phone: '+91 91234 56789',
    });

    return (
        <SafeAreaView className="flex-1 bg-white">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                {/* Header */}
                <View className="flex-row items-center p-4">
                    <TouchableOpacity onPress={() => router.back()} className="p-2">
                        <IconSymbol name="chevron.left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className="flex-1 text-center text-xl font-bold mr-10">Edit Profile</Text>
                </View>

                <View className="px-6 py-4 items-center">
                    <Text className="text-sm text-[#6E6E6E] mb-8">User ID: SYS-ADM-001</Text>

                    <View className="w-full">
                        <CustomInput
                            label="Name"
                            value={formData.name}
                            onChangeText={(v) => setFormData({ ...formData, name: v })}
                        />
                        <CustomInput
                            label="Email"
                            value={formData.email}
                            keyboardType="email-address"
                            onChangeText={(v) => setFormData({ ...formData, email: v })}
                        />
                        <CustomInput
                            label="Phone"
                            value={formData.phone}
                            keyboardType="phone-pad"
                            onChangeText={(v) => setFormData({ ...formData, phone: v })}
                        />
                    </View>

                    <View className="mt-auto w-full mb-10">
                        <TouchableOpacity
                            className="mb-8 items-center"
                            onPress={() => router.push('/(superadmin)/profile/change-password')}
                        >
                            <Text className="text-[#A52A2A] font-bold border border-[#A52A2A] px-6 py-2 rounded-xl">
                                Change password
                            </Text>
                        </TouchableOpacity>

                        <CustomButton
                            title="Save personal info"
                            onPress={() => router.back()}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default EditProfileScreen;
