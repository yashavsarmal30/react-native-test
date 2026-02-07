import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import CircularProgress from '@/components/ui/CircularProgress';
import StatusBadge from '@/components/ui/StatusBadge';
import CustomButton from '@/components/ui/CustomButton';

const CompanyDetailsScreen = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="bg-[#A52A2A] p-4 flex-row items-center border-b border-white/10">
                <TouchableOpacity onPress={() => router.back()} className="mr-4">
                    <IconSymbol name="chevron.left" size={24} color="white" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold">Company details</Text>
            </View>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                {/* Basic Info Header */}
                <View className="p-6 pb-0">
                    <View className="flex-row justify-between items-start">
                        <View className="flex-1">
                            <Text className="text-2xl font-bold text-black">ABC Infrastructure Pvt Ltd</Text>
                            <Text className="text-[#6E6E6E] text-xs">Mumbai | ID-2341</Text>
                        </View>
                        <View className="flex-row items-center">
                            <TouchableOpacity className="mr-3 bg-gray-100 p-2 rounded-full">
                                <IconSymbol name="pencil" size={18} color="#6E6E6E" />
                            </TouchableOpacity>
                            <StatusBadge status="active" />
                        </View>
                    </View>
                </View>

                {/* Analytics Section */}
                <View className="p-6 flex-row items-center">
                    <CircularProgress progress={0.6} size={100} strokeWidth={8} />
                    <View className="flex-1 ml-6">
                        <View className="flex-row justify-between mb-2">
                            <Text className="text-sm font-medium">Total Projects: 11</Text>
                        </View>
                        <View className="flex-row items-center mb-1">
                            <View className="w-3 h-3 rounded-full bg-green-500 mr-2" />
                            <Text className="text-xs text-[#606060]">Active Projects: 7</Text>
                        </View>
                        <View className="flex-row items-center">
                            <View className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                            <Text className="text-xs text-[#606060]">Inactive Projects: 4</Text>
                        </View>
                    </View>
                    <View className="gap-y-2">
                        <View className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm items-center">
                            <Text className="text-lg font-bold">48</Text>
                            <Text className="text-[10px] text-[#6E6E6E]">Total users</Text>
                        </View>
                        <View className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm items-center">
                            <Text className="text-lg font-bold">120</Text>
                            <Text className="text-[10px] text-[#6E6E6E]">Workers</Text>
                        </View>
                    </View>
                </View>

                {/* Company Info List */}
                <View className="px-6 space-y-6">
                    <Section label="Company details">
                        <InfoRow label="Registration Number" value="U45201MH2016PTC287654" />
                        <InfoRow label="GST Number" value="27AABCA1234F1Z9" />
                        <InfoRow label="Email" value="info@abcinfrastructure.com" />
                        <InfoRow label="Website" value="www.abcinfrastructure.com" isLink />
                        <InfoRow label="Phone" value="+91 98765 43210" />
                    </Section>

                    <Section label="Company Location">
                        <InfoRow label="Address" value="3rd Floor, Shree Ganesh Plaza, Near Andheri Metro Station, Andheri East, Mumbai - 400069, Maharashtra" />
                    </Section>

                    <Section label="Admin details">
                        <InfoRow label="Name" value="Rakesh Sharma" />
                        <InfoRow label="Role" value="Company Admin" />
                        <InfoRow label="Phone" value="+91 91234 56789" />
                        <InfoRow label="Email" value="rakesh.sharma@abcinfrastructure.com" />
                    </Section>

                    <Section label="Bank details">
                        <InfoRow label="Bank Name" value="HDFC Bank" />
                        <InfoRow label="Account Number" value="50200123456789" />
                        <InfoRow label="IFSC Code" value="HDFC0001234" />
                        <InfoRow label="Branch" value="Andheri East, Mumbai" />
                    </Section>
                </View>

                <View className="p-6 mb-20">
                    <CustomButton
                        title="Suspend company"
                        variant="danger"
                        onPress={() => router.push('/(superadmin)/companies/suspend')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const Section = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <View className="mb-6">
        <Text className="text-lg font-bold text-black mb-3">{label}</Text>
        <View className="h-[1px] bg-gray-100 mb-3" />
        {children}
    </View>
);

const InfoRow = ({ label, value, isLink }: { label: string, value: string, isLink?: boolean }) => (
    <View className="mb-3">
        <Text className="text-[10px] text-[#6E6E6E] font-medium">{label}:</Text>
        <Text className={`text-[12px] font-medium mt-1 ${isLink ? 'text-[#A52A2A] underline' : 'text-black'}`}>
            {value}
        </Text>
    </View>
);

export default CompanyDetailsScreen;
