import React, { useState } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
} from 'react-native';
import { Header } from '../../components/common/Header';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { typography } from '../../constants/typography';

const EditProfileScreen = ({ navigation }: any) => {
    const [formData, setFormData] = useState({
        name: 'Patrick Stump',
        email: 'patrick.stump@abccinfrastructure.com',
        phone: '9123456789',
    });

    const [loading, setLoading] = useState(false);

    const handleSave = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.goBack();
        }, 1500);
    };

    return (
        <View style={styles.container}>
            <Header title="Edit Profile" showBack />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.form}>
                    <Input
                        label="Full Name"
                        value={formData.name}
                        onChangeText={val => setFormData(prev => ({ ...prev, name: val }))}
                    />
                    <Input
                        label="Email Address"
                        value={formData.email}
                        type="email"
                        onChangeText={val => setFormData(prev => ({ ...prev, email: val }))}
                    />
                    <Input
                        label="Phone Number"
                        value={formData.phone}
                        type="phone"
                        prefix="+91"
                        onChangeText={val => setFormData(prev => ({ ...prev, phone: val }))}
                    />

                    <Button
                        title="Change Password"
                        variant="outline"
                        onPress={() => navigation.navigate('ChangePassword')}
                        style={styles.changePwdBtn}
                    />

                    <Button
                        title="Save Personal Info"
                        onPress={handleSave}
                        loading={loading}
                        style={styles.saveBtn}
                    />
                </View>
            </ScrollView>
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
    form: {
        marginTop: spacing.md,
    },
    changePwdBtn: {
        marginTop: spacing.lg,
        marginBottom: spacing.md,
    },
    saveBtn: {
        marginBottom: spacing.xxl,
    }
});

export default EditProfileScreen;
