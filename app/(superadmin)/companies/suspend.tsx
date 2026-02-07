import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import CustomButton from '@/components/ui/CustomButton';

const SuspendCompanyScreen = () => {
    const router = useRouter();
    const [reason, setReason] = useState('');
    const [impactUnderstood, setImpactUnderstood] = useState(false);

    const handleSuspend = () => {
        // Logic to suspend
        router.push('/(superadmin)/companies/index');
    };

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
                <View className="flex-row items-center mb-6">
                    <Text className="text-[#A52A2A] text-2xl font-bold mr-2">Suspend Company?</Text>
                    <IconSymbol name="exclamationmark.triangle.fill" size={24} color="#A52A2A" />
                </View>

                <View className="mb-8">
                    <Text className="text-black font-bold mb-2">Are you sure you want to suspend ABC Infrastructure Pvt Ltd?</Text>

                    <View className="bg-[#FFF5F5] p-4 rounded-xl border border-[#FAADAD] mt-4">
                        <Text className="font-bold text-[#A52A2A] mb-2">Suspending this company will:</Text>
                        <Text className="text-xs text-[#6E6E6E] mb-1">• Immediately block all users from logging in</Text>
                        <Text className="text-xs text-[#6E6E6E] mb-1">• Pause all ongoing projects</Text>
                        <Text className="text-xs text-[#6E6E6E]">• Restrict access to data</Text>
                    </View>
                </View>

                <View className="mb-8">
                    <Text className="text-sm font-bold mb-2">Suspend Reason</Text>
                    <TextInput
                        className="border border-[#D1D1D1] rounded-xl p-4 h-32 text-start align-top"
                        placeholder="Explain why this company is being suspended..."
                        multiline
                        value={reason}
                        onChangeText={setReason}
                    />
                </View>

                <TouchableOpacity
                    className="flex-row items-center mb-10"
                    onPress={() => setImpactUnderstood(!impactUnderstood)}
                >
                    <View className={`w-5 h-5 border border-[#A52A2A] rounded mr-3 items-center justify-center ${impactUnderstood ? 'bg-[#A52A2A]' : ''}`}>
                        {impactUnderstood && <IconSymbol name="checkmark" size={14} color="white" />}
                    </View>
                    <Text className="text-sm font-medium">I understand the impact of this action</Text>
                </TouchableOpacity>

                <View className="mt-auto space-y-4">
                    <CustomButton
                        title="Suspend company"
                        variant="danger"
                        disabled={!impactUnderstood || reason.length < 5}
                        onPress={handleSuspend}
                    />
                    <TouchableOpacity onPress={() => router.back()} className="items-center py-2">
                        <Text className="text-[#A52A2A] font-bold">Cancel</Text>
                    </TouchableOpacity>
                </View>

                <Text className="text-center text-[10px] text-[#6E6E6E] mt-6 px-10">
                    You can reactivate the company anytime. This action does not delete any data.
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SuspendCompanyScreen;
