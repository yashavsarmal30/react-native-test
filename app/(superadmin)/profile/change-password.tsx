import { View, Text, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import CustomInput from '@/components/ui/CustomInput';
import CustomButton from '@/components/ui/CustomButton';

const ChangePasswordScreen = () => {
    const router = useRouter();
    const [step, setStep] = useState(1); // 1: Old Password, 2: New Password, 3: Success
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleContinue = () => {
        if (step < 3) setStep(step + 1);
        else router.back();
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <View className="flex-1 w-full px-1 items-center">
                        <Text className="text-3xl font-bold text-center mb-12 mt-10">Change Password</Text>
                        <View className="w-full">
                            <CustomInput
                                label="Enter your old Password"
                                placeholder="Enter password"
                                secureTextEntry
                                value={formData.oldPassword}
                                onChangeText={(txt) => setFormData({ ...formData, oldPassword: txt })}
                            />
                        </View>
                    </View>
                );
            case 2:
                return (
                    <View className="flex-1 w-full px-1 items-center">
                        <Text className="text-3xl font-bold text-center mb-12 mt-10">Change Password</Text>
                        <View className="w-full">
                            <CustomInput
                                label="New Password"
                                placeholder="New password"
                                secureTextEntry
                                value={formData.newPassword}
                                onChangeText={(txt) => setFormData({ ...formData, newPassword: txt })}
                            />
                            <CustomInput
                                label="Confirm Password"
                                placeholder="Confirm password"
                                secureTextEntry
                                value={formData.confirmPassword}
                                onChangeText={(txt) => setFormData({ ...formData, confirmPassword: txt })}
                            />
                        </View>
                    </View>
                );
            case 3:
                return (
                    <View className="flex-1 w-full px-1 items-center justify-center -mt-20">
                        <View className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm items-center w-full">
                            <Text className="text-xl font-bold mb-4">Password updated</Text>
                            <View className="bg-green-500 rounded-full p-2">
                                <IconSymbol name="checkmark" size={30} color="white" />
                            </View>
                        </View>
                    </View>
                );
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <View className="flex-row items-center p-4">
                    <TouchableOpacity onPress={() => step > 1 && step < 3 ? setStep(step - 1) : router.back()} className="p-2">
                        <IconSymbol name="chevron.left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className="flex-1 text-center text-xl font-bold mr-10">Edit Profile</Text>
                </View>

                <View className="flex-1 px-10">
                    {renderStep()}

                    <View className="mb-10 w-full">
                        <CustomButton
                            title={step === 3 ? "Back to Profile" : "Continue"}
                            onPress={handleContinue}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ChangePasswordScreen;
