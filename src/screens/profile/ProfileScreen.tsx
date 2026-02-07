import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../components/common/Header';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { typography } from '../../constants/typography';

const ProfileScreen = ({ navigation }: any) => {
    const user = {
        id: 'SYS-ADM-001',
        name: 'Patrick Stump',
        role: 'Super Admin',
        email: 'patrick.stump@abccinfrastructure.com',
        phone: '+91 91234 56789',
        userType: 'SUPER_ADMIN',
        accountCreated: '02 Jan 2024',
        lastLogin: '24 Aug 2025 | 08:12 AM',
    };

    const handleLogout = () => {
        Alert.alert(
            'Log Out',
            'Are you sure you want to log out of your account?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Log Out', style: 'destructive', onPress: () => { } },
            ]
        );
    };

    const InfoItem = ({ label, value, icon, verified }: any) => (
        <View style={styles.infoItem}>
            <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>{label}</Text>
                <View style={styles.valueContainer}>
                    <Text style={styles.infoValue}>{value}</Text>
                    {verified && (
                        <Ionicons name="checkmark-circle" size={16} color={colors.status.success} style={{ marginLeft: 4 }} />
                    )}
                </View>
            </View>
            {icon && <Ionicons name={icon} size={20} color={colors.secondary} />}
        </View>
    );

    return (
        <View style={styles.container}>
            <Header title="Super Admin Profile" />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Profile Card */}
                <View style={styles.profileHero}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>PS</Text>
                        </View>
                        <TouchableOpacity style={styles.editAvatarBtn} onPress={() => navigation.navigate('EditProfile')}>
                            <Ionicons name="pencil" size={16} color={colors.text.white} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.heroInfo}>
                        <View style={styles.idRow}>
                            <Text style={styles.userId}>User ID: {user.id}</Text>
                            <TouchableOpacity>
                                <Ionicons name="copy-outline" size={14} color={colors.secondary} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Badge label={user.role} type="neutral" style={{ marginTop: 4 }} />
                    </View>
                </View>

                <Card title="Personal Info">
                    <InfoItem label="Email" value={user.email} verified />
                    <InfoItem label="Phone" value={user.phone} />
                </Card>

                <Card title="Account Info">
                    <View style={styles.accountRow}>
                        <Text style={styles.accountLabel}>User type</Text>
                        <Text style={styles.accountValue}>{user.userType}</Text>
                    </View>
                    <View style={styles.accountRow}>
                        <Text style={styles.accountLabel}>Account created</Text>
                        <Text style={styles.accountValue}>{user.accountCreated}</Text>
                    </View>
                    <View style={styles.accountRow}>
                        <Text style={styles.accountLabel}>Last login</Text>
                        <Text style={styles.accountValue}>{user.lastLogin}</Text>
                    </View>
                </Card>

                <Button
                    title="Log Out"
                    variant="danger"
                    onPress={handleLogout}
                    style={styles.logoutBtn}
                />

                <TouchableOpacity
                    style={styles.editBtn}
                    onPress={() => navigation.navigate('EditProfile')}
                >
                    <Text style={styles.editBtnText}>Edit Profile</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
    },
    scrollContent: {
        padding: spacing.md,
    },
    profileHero: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing.lg,
        backgroundColor: colors.background,
        padding: spacing.md,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border,
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.surface,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.primary,
    },
    avatarText: {
        ...typography.h2,
        color: colors.primary,
    },
    editAvatarBtn: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: colors.primary,
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.background,
    },
    heroInfo: {
        marginLeft: spacing.lg,
        flex: 1,
    },
    idRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
    userId: {
        ...typography.tiny,
        color: colors.text.secondary,
        marginRight: 4,
    },
    userName: {
        ...typography.h3,
        color: colors.text.primary,
    },
    infoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: spacing.sm,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    infoContent: {
        flex: 1,
    },
    infoLabel: {
        ...typography.tiny,
        color: colors.text.secondary,
        marginBottom: 2,
    },
    valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoValue: {
        ...typography.caption,
        color: colors.text.primary,
        fontWeight: '600',
    },
    accountRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: spacing.sm,
    },
    accountLabel: {
        ...typography.caption,
        color: colors.text.secondary,
    },
    accountValue: {
        ...typography.caption,
        color: colors.text.primary,
        fontWeight: '600',
    },
    logoutBtn: {
        marginTop: spacing.xl,
    },
    editBtn: {
        marginTop: spacing.md,
        alignItems: 'center',
        padding: spacing.md,
    },
    editBtnText: {
        ...typography.body,
        color: colors.primary,
        fontWeight: '600',
        textDecorationLine: 'underline',
    }
});

export default ProfileScreen;
