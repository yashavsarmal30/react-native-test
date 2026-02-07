import React, { useState } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Header } from '../../components/common/Header';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { typography } from '../../constants/typography';
import { validateField } from '../../utils/validation';

const CreateCompanyScreen = ({ navigation }: any) => {
    const [formData, setFormData] = useState({
        name: '',
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

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    const handleChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleCreate = async () => {
        const newErrors: Record<string, string> = {};

        // Validate all required fields
        Object.keys(formData).forEach(key => {
            if (key !== 'website') {
                const error = validateField(key, (formData as any)[key]);
                if (error) newErrors[key] = error;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigation.goBack();
        }, 1500);
    };

    return (
        <View style={styles.container}>
            <Header title="Create company" showBack />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Company Details</Text>
                        <Input
                            label="Company name"
                            required
                            value={formData.name}
                            onChangeText={val => handleChange('name', val)}
                            error={errors.name}
                            placeholder="ABC Constructions Pvt Ltd"
                        />
                        <Input
                            label="Address"
                            required
                            multiline
                            value={formData.address}
                            onChangeText={val => handleChange('address', val)}
                            error={errors.address}
                            placeholder="Site no. 24, Andheri East, Mumbai"
                        />
                        <View style={styles.row}>
                            <View style={{ flex: 1, marginRight: spacing.sm }}>
                                <Input
                                    label="Registration number"
                                    required
                                    value={formData.registrationNumber}
                                    onChangeText={val => handleChange('registrationNumber', val)}
                                    error={errors.registrationNumber}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Input
                                    label="GST number"
                                    required
                                    value={formData.gstNumber}
                                    onChangeText={val => handleChange('gstNumber', val)}
                                    error={errors.gstNumber}
                                    placeholder="15-character GSTIN"
                                />
                            </View>
                        </View>
                        <Input
                            label="Email"
                            required
                            type="email"
                            value={formData.email}
                            onChangeText={val => handleChange('email', val)}
                            error={errors.email}
                            placeholder="admin@company.com"
                        />
                        <Input
                            label="Website"
                            value={formData.website}
                            onChangeText={val => handleChange('website', val)}
                            error={errors.website}
                            placeholder="www.company.com"
                        />
                        <Input
                            label="Phone"
                            required
                            type="phone"
                            prefix="+91"
                            value={formData.phone}
                            onChangeText={val => handleChange('phone', val)}
                            error={errors.phone}
                        />
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Admin details</Text>
                        <Input
                            label="Admin Name"
                            required
                            value={formData.adminName}
                            onChangeText={val => handleChange('adminName', val)}
                            error={errors.adminName}
                            placeholder="Rahul Sharma"
                        />
                        <Input
                            label="Email"
                            required
                            type="email"
                            value={formData.adminEmail}
                            onChangeText={val => handleChange('adminEmail', val)}
                            error={errors.adminEmail}
                            placeholder="rahul@company.com"
                        />
                        <Input
                            label="Phone"
                            required
                            type="phone"
                            prefix="+91"
                            value={formData.adminPhone}
                            onChangeText={val => handleChange('adminPhone', val)}
                            error={errors.adminPhone}
                        />
                    </View>

                    <Button
                        title="Create company"
                        onPress={handleCreate}
                        loading={loading}
                        style={styles.submitButton}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollContent: {
        padding: spacing.md,
    },
    section: {
        marginBottom: spacing.lg,
    },
    sectionTitle: {
        ...typography.bodyBold,
        color: colors.text.secondary,
        marginBottom: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: spacing.xs,
    },
    row: {
        flexDirection: 'row',
    },
    submitButton: {
        marginTop: spacing.md,
        marginBottom: spacing.xxl,
    },
});

export default CreateCompanyScreen;
