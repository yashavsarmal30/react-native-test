import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import CustomInput from '@/components/ui/CustomInput';
import CustomButton from '@/components/ui/CustomButton';

const CreateCompanyScreen = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        companyName: '',
        address: '',
        registrationNumber: '',
        gstNumber: '',
        email: '',
        website: '',
        phone: '',
        adminName: '',
        adminEmail: '',
        adminPhone: '',
    });

    const handleCreate = () => {
        // Logic to create company
        router.back();
    };

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
                    <Text className="flex-1 text-center text-xl font-bold mr-10">Create company</Text>
                </View>

                <ScrollView className="flex-1 px-6 pb-10" showsVerticalScrollIndicator={false}>
                    <View className="mt-4">
                        <CustomInput
                            label="Company name*"
                            placeholder="e.g. ABC Infrastructure Pvt Ltd"
                            value={formData.companyName}
                            onChangeText={(txt) => setFormData({ ...formData, companyName: txt })}
                        />
                        <CustomInput
                            label="Address*"
                            placeholder="e.g. No. 24, Southern East, Mumbai"
                            value={formData.address}
                            onChangeText={(txt) => setFormData({ ...formData, address: txt })}
                        />

                        <View className="flex-row gap-x-4">
                            <View className="flex-1">
                                <CustomInput
                                    label="Registration number*"
                                    placeholder="U45201MH2016PTC287654"
                                    value={formData.registrationNumber}
                                    onChangeText={(txt) => setFormData({ ...formData, registrationNumber: txt })}
                                />
                            </View>
                            <View className="flex-1">
                                <CustomInput
                                    label="GST number*"
                                    placeholder="27AABCA1234F1Z9"
                                    value={formData.gstNumber}
                                    onChangeText={(txt) => setFormData({ ...formData, gstNumber: txt })}
                                />
                            </View>
                        </View>

                        <CustomInput
                            label="Email*"
                            placeholder="info@abcinfrastructure.com"
                            keyboardType="email-address"
                            value={formData.email}
                            onChangeText={(txt) => setFormData({ ...formData, email: txt })}
                        />
                        <CustomInput
                            label="Website"
                            placeholder="www.abcinfrastructure.com"
                            value={formData.website}
                            onChangeText={(txt) => setFormData({ ...formData, website: txt })}
                        />
                        <CustomInput
                            label="Phone*"
                            placeholder="+91 98765 43210"
                            keyboardType="phone-pad"
                            value={formData.phone}
                            onChangeText={(txt) => setFormData({ ...formData, phone: txt })}
                        />

                        <View className="my-6 items-center">
                            <Text className="text-lg font-bold">Admin details</Text>
                            <View className="h-[2px] w-full bg-gray-100 mt-2" />
                        </View>

                        <CustomInput
                            label="Admin Name*"
                            placeholder="Rakesh Sharma"
                            value={formData.adminName}
                            onChangeText={(txt) => setFormData({ ...formData, adminName: txt })}
                        />
                        <CustomInput
                            label="Email*"
                            placeholder="rakesh.sharma@abcinfrastructure.com"
                            keyboardType="email-address"
                            value={formData.adminEmail}
                            onChangeText={(txt) => setFormData({ ...formData, adminEmail: txt })}
                        />
                        <CustomInput
                            label="Phone*"
                            placeholder="+91"
                            keyboardType="phone-pad"
                            value={formData.adminPhone}
                            onChangeText={(txt) => setFormData({ ...formData, adminPhone: txt })}
                        />

                        <View className="flex-row items-center mt-4 mb-8">
                            <TouchableOpacity className="w-5 h-5 border border-[#A52A2A] rounded mr-2" />
                            <Text className="text-xs text-[#6E6E6E]">Give all permissions to admin</Text>
                        </View>

                        <CustomButton title="Create company" onPress={handleCreate} className="mb-10" />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default CreateCompanyScreen;
