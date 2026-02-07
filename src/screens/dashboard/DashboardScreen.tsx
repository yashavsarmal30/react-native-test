import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components/common/Header';
import { StatCard } from '../../components/dashboard/StatCard';
import { SystemAlert } from '../../components/dashboard/SystemAlert';
import { CircularProgress } from '../../components/dashboard/CircularProgress';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { typography } from '../../constants/typography';
import { formatCurrency } from '../../utils/formatters';

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <Header
                title="WELCOME BACK,"
                subtitle="Patrick Stump | Super Admin"
                gradient
            />

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Statistics Grid */}
                <View style={styles.statsGrid}>
                    <View style={styles.row}>
                        <View style={styles.statDouble}>
                            <View style={styles.statHeader}>
                                <Text style={styles.statTitle}>ACTIVE COMPANIES</Text>
                                <Text style={styles.statValue}>200</Text>
                            </View>
                            <CircularProgress
                                size={80}
                                strokeWidth={8}
                                percentage={85}
                                color={colors.primary}
                                label="234"
                            />
                        </View>
                    </View>

                    <View style={styles.row}>
                        <StatCard
                            title="SUSPENDED COMPANIES"
                            value="14"
                            icon="alert-circle"
                            iconColor={colors.status.error}
                        />
                        <StatCard
                            title="TOTAL USERS"
                            value="1,362"
                            icon="people"
                            subtitle="Projects: 312"
                        />
                    </View>

                    <View style={styles.incomeCard}>
                        <View>
                            <Text style={styles.incomeLabel}>TOTAL REVENUE (THIS MONTH)</Text>
                            <Text style={styles.incomeValue}>{formatCurrency(480000)}</Text>
                        </View>
                        <View style={styles.incomeIcon}>
                            <Text style={{ fontSize: 24 }}>📈</Text>
                        </View>
                    </View>
                </View>

                {/* System Alerts */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <View style={styles.sectionTitleContainer}>
                            <Text style={styles.sectionTitle}>System alerts</Text>
                            <Text style={{ marginLeft: spacing.xs }}>⚠️</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.viewAll}>View all</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.alertList}>
                        <SystemAlert
                            type="new_company"
                            message="Startex Constructions Pvt Ltd registered successfully"
                            timestamp={new Date(Date.now() - 3600000 * 24).toISOString()} // 1d ago
                        />
                        <SystemAlert
                            type="suspension"
                            message="RK Infra Solutions suspended due to policy violation"
                            timestamp={new Date(Date.now() - 3600000 * 24).toISOString()} // 1d ago
                        />
                        <SystemAlert
                            type="warning"
                            message="Skyline Builders has shown no activity for 15 days"
                            timestamp={new Date(Date.now() - 3600000 * 2).toISOString()} // 2h ago
                        />
                    </View>
                </View>
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
    statsGrid: {
        marginBottom: spacing.lg,
    },
    row: {
        flexDirection: 'row',
        marginBottom: spacing.sm,
    },
    statDouble: {
        flex: 1,
        backgroundColor: colors.background,
        borderRadius: 12,
        padding: spacing.md,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    statHeader: {
        justifyContent: 'center',
    },
    statTitle: {
        ...typography.tiny,
        fontWeight: '700',
        color: colors.text.secondary,
        marginBottom: 4,
    },
    statValue: {
        ...typography.h1,
        color: colors.text.primary,
    },
    incomeCard: {
        backgroundColor: '#FFE5E5',
        borderRadius: 8,
        padding: spacing.md,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: spacing.sm,
        borderWidth: 1,
        borderColor: '#FFD1D1',
    },
    incomeLabel: {
        ...typography.tiny,
        fontWeight: '700',
        color: colors.primary,
    },
    incomeValue: {
        ...typography.h3,
        color: colors.primary,
    },
    incomeIcon: {
        backgroundColor: colors.text.white,
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    section: {
        marginTop: spacing.md,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.md,
    },
    sectionTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionTitle: {
        ...typography.h4,
        color: colors.primary,
    },
    viewAll: {
        ...typography.caption,
        color: colors.primary,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
    alertList: {
        backgroundColor: colors.background,
        borderRadius: 12,
        paddingHorizontal: spacing.md,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
});

export default DashboardScreen;
