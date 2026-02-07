import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../components/common/Header';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { CircularProgress } from '../../components/dashboard/CircularProgress';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { typography } from '../../constants/typography';

const CompanyDetailsScreen = ({ route, navigation }: any) => {
    const { companyId } = route.params;

    // Mock data for the specific company
    const company = {
        id: companyId,
        name: 'ABC Infrastructure Pvt Ltd',
        status: 'active',
        location: 'Mumbai | ID-2341',
        createdAt: '12 Jan 2024',
        registrationNumber: 'U45201MH2016PTC287654',
        gstNumber: '27AABCA1234F1Z9',
        email: 'info@abcinfrastructure.com',
        website: 'www.abccinfrastructure.com',
        phone: '+91 98765 43210',
        address: '3rd Floor, Shree Ganesh Plaza, Near Andheri Metro Station, Andheri East, Mumbai - 400069, Maharashtra',
        adminName: 'Rakesh Sharma',
        adminRole: 'Company Admin',
        adminPhone: '+91 91234 56789',
        adminEmail: 'rakesh.sharma@abccinfrastructure.com',
        bankName: 'HDFC Bank',
        accountNumber: '50200123456789',
        ifscCode: 'HDFC0001234',
        branch: 'Andheri East, Mumbai',
        stats: {
            totalProjects: 11,
            activeProjects: 7,
            onHoldProjects: 4,
            totalUsers: 48,
            activeUsers: 120,
        }
    };

    const InfoRow = ({ label, value, isLink }: any) => (
        <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>{label}:</Text>
            <Text style={[styles.infoValue, isLink && styles.linkText]}>{value}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header
                title="Company details"
                showBack
                rightIcon={
                    <TouchableOpacity onPress={() => navigation.navigate('EditCompany', { companyId: company.id })}>
                        <Ionicons name="pencil" size={20} color={colors.text.white} />
                    </TouchableOpacity>
                }
            />

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.heroSection}>
                    <View>
                        <Text style={styles.companyName}>{company.name}</Text>
                        <Text style={styles.companyMeta}>{company.location}</Text>
                        <Text style={styles.createdDate}>Created on: {company.createdAt}</Text>
                    </View>
                    <Badge label={company.status} type="success" />
                </View>

                {/* Stats Row */}
                <View style={styles.statsRow}>
                    <View style={styles.statsLeft}>
                        <CircularProgress
                            size={100}
                            strokeWidth={10}
                            percentage={65}
                            color={colors.primary}
                        />
                        <View style={styles.statsLabels}>
                            <Text style={styles.statsCount}>Total Projects: {company.stats.totalProjects}</Text>
                            <Text style={[styles.statsCount, { color: colors.status.success }]}>Active Projects: {company.stats.activeProjects}</Text>
                            <Text style={[styles.statsCount, { color: colors.status.error }]}>Inactive Projects: {company.stats.onHoldProjects}</Text>
                        </View>
                    </View>
                    <View style={styles.statsRight}>
                        <View style={styles.userStat}>
                            <Text style={styles.userCount}>{company.stats.totalUsers}</Text>
                            <Text style={styles.userLabel}>Total users</Text>
                        </View>
                        <View style={styles.userStat}>
                            <Text style={styles.userCount}>{company.stats.activeUsers}</Text>
                            <Text style={styles.userLabel}>Workers</Text>
                        </View>
                    </View>
                </View>

                <Card title="Company details">
                    <InfoRow label="Registration Number" value={company.registrationNumber} />
                    <InfoRow label="GST Number" value={company.gstNumber} />
                    <InfoRow label="Email" value={company.email} isLink />
                    <InfoRow label="Website" value={company.website} isLink />
                    <InfoRow label="Phone" value={company.phone} />
                </Card>

                <Card title="Company Location">
                    <Text style={styles.addressText}>{company.address}</Text>
                </Card>

                <Card title="Admin details">
                    <InfoRow label="Name" value={company.adminName} />
                    <InfoRow label="Role" value={company.adminRole} />
                    <InfoRow label="Phone" value={company.adminPhone} />
                    <InfoRow label="Email" value={company.adminEmail} isLink />
                </Card>

                <Card title="Bank details">
                    <InfoRow label="Bank Name" value={company.bankName} />
                    <InfoRow label="Account Number" value={company.accountNumber.replace(/.(?=.{4})/g, '*')} />
                    <InfoRow label="IFSC Code" value={company.ifscCode} />
                    <InfoRow label="Branch" value={company.branch} />
                </Card>

                <Button
                    title="Suspend company"
                    variant="danger"
                    style={styles.suspendButton}
                    onPress={() => navigation.navigate('SuspendCompany', {
                        companyId: company.id,
                        companyName: company.name
                    })}
                />
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
        paddingBottom: 40,
    },
    heroSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: spacing.lg,
    },
    companyName: {
        ...typography.h3,
        color: colors.text.primary,
    },
    companyMeta: {
        ...typography.caption,
        color: colors.text.secondary,
    },
    createdDate: {
        ...typography.tiny,
        color: colors.text.secondary,
        marginTop: 4,
    },
    statsRow: {
        flexDirection: 'row',
        backgroundColor: colors.background,
        borderRadius: 12,
        padding: spacing.md,
        marginBottom: spacing.lg,
        alignItems: 'center',
        elevation: 2,
    },
    statsLeft: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    statsLabels: {
        marginLeft: spacing.md,
    },
    statsCount: {
        ...typography.tiny,
        fontWeight: '600',
        marginBottom: 2,
    },
    statsRight: {
        flex: 1,
        borderLeftWidth: 1,
        borderLeftColor: colors.border,
        paddingLeft: spacing.md,
    },
    userStat: {
        alignItems: 'center',
        marginBottom: spacing.sm,
    },
    userCount: {
        ...typography.h3,
        color: colors.text.primary,
    },
    userLabel: {
        ...typography.tiny,
        color: colors.text.secondary,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: spacing.sm,
    },
    infoLabel: {
        ...typography.caption,
        color: colors.text.secondary,
    },
    infoValue: {
        ...typography.caption,
        color: colors.text.primary,
        fontWeight: '500',
        textAlign: 'right',
        flex: 1,
        marginLeft: spacing.md,
    },
    linkText: {
        color: colors.primary,
        textDecorationLine: 'underline',
    },
    addressText: {
        ...typography.caption,
        color: colors.text.primary,
        lineHeight: 20,
    },
    suspendButton: {
        marginTop: spacing.md,
    },
});

export default CompanyDetailsScreen;
