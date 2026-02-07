import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../components/common/Header';
import { CompanyListItem } from '../../components/company/CompanyListItem';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { typography } from '../../constants/typography';
import { Company } from '../../types';

const MOCK_COMPANIES: Company[] = [
    {
        id: '1',
        name: 'ABC Infrastructure Pvt Ltd',
        status: 'active',
        adminName: 'Rajesh Sharma',
        address: 'Site no. 24, Andheri East, Mumbai',
        createdAt: '12 Aug 2023',
        registrationNumber: 'U45201MH2016PTC287654',
        gstNumber: '27AABCA1234F1Z9',
        email: 'info@abcinfrastructure.com',
        phone: '9876543210',
        adminEmail: 'rajesh@abcinfrastructure.com',
        adminPhone: '9123456789',
        totalProjects: 11,
        activeProjects: 7,
        totalUsers: 48,
    },
    {
        id: '2',
        name: 'XYZ Constructions',
        status: 'suspended',
        adminName: 'Amit Patel',
        address: 'Plot 42, Sector 5, Gurgaon',
        createdAt: '05 Jan 2024',
        registrationNumber: 'U45201DL2018PTC123456',
        gstNumber: '07AAACX1234F1Z1',
        email: 'contact@xyzconstructions.com',
        phone: '9988776655',
        adminEmail: 'amit@xyzconstructions.com',
        adminPhone: '9876501234',
        totalProjects: 5,
        activeProjects: 0,
        totalUsers: 20,
    },
    {
        id: '3',
        name: 'Global Builders',
        status: 'active',
        adminName: 'Sunil Verma',
        address: '12th Floor, MG Road, Bangalore',
        createdAt: '20 Sep 2023',
        registrationNumber: 'U45201KA2017PTC987654',
        gstNumber: '29AABCG4567H1Z2',
        email: 'hello@globalbuilders.in',
        phone: '9000011111',
        adminEmail: 'sunil@globalbuilders.in',
        adminPhone: '9222233333',
        totalProjects: 25,
        activeProjects: 18,
        totalUsers: 156,
    },
];

const CompanyListScreen = ({ navigation }: any) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredCompanies = MOCK_COMPANIES.filter(company => {
        const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = activeFilter === 'All' ||
            (activeFilter === 'Active' && company.status === 'active') ||
            (activeFilter === 'Suspended' && company.status === 'suspended');
        return matchesSearch && matchesFilter;
    });

    const renderFilterChip = (label: string) => (
        <TouchableOpacity
            style={[
                styles.filterChip,
                activeFilter === label && styles.activeFilterChip
            ]}
            onPress={() => setActiveFilter(label)}
        >
            <Text style={[
                styles.filterText,
                activeFilter === label && styles.activeFilterText
            ]}>
                {label}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Header title="Company list" showBack />

            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={20} color={colors.secondary} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search Companies"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <TouchableOpacity>
                        <Ionicons name="mic-outline" size={20} color={colors.secondary} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.filterButton}>
                    <Ionicons name="options-outline" size={20} color={colors.primary} />
                    <Text style={styles.filterBtnText}>Filter</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.filtersWrapper}>
                <Text style={styles.sectionTitle}>Companies List</Text>
                <View style={styles.filterChipsRow}>
                    {renderFilterChip('All')}
                    {renderFilterChip('Active')}
                    {renderFilterChip('Suspended')}
                </View>
            </View>

            <FlatList
                data={filteredCompanies}
                renderItem={({ item }) => (
                    <CompanyListItem
                        company={item}
                        onPress={() => navigation.navigate('CompanyDetails', { companyId: item.id })}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={() => (
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyText}>No companies found</Text>
                    </View>
                )}
            />

            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate('CreateCompany')}
            >
                <Ionicons name="add" size={32} color={colors.text.white} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
    },
    searchContainer: {
        flexDirection: 'row',
        padding: spacing.md,
        alignItems: 'center',
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.background,
        borderRadius: 8,
        paddingHorizontal: spacing.md,
        height: 48,
        borderWidth: 1,
        borderColor: colors.border,
    },
    searchInput: {
        flex: 1,
        marginLeft: spacing.sm,
        ...typography.body,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: spacing.sm,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 8,
        paddingHorizontal: spacing.sm,
        height: 48,
    },
    filterBtnText: {
        ...typography.caption,
        color: colors.primary,
        fontWeight: '600',
        marginLeft: 4,
    },
    filtersWrapper: {
        paddingHorizontal: spacing.md,
        marginBottom: spacing.sm,
    },
    sectionTitle: {
        ...typography.h4,
        color: colors.text.primary,
        marginBottom: spacing.sm,
    },
    filterChipsRow: {
        flexDirection: 'row',
    },
    filterChip: {
        paddingVertical: 6,
        paddingHorizontal: spacing.md,
        borderRadius: 20,
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.border,
        marginRight: spacing.sm,
    },
    activeFilterChip: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    filterText: {
        ...typography.caption,
        color: colors.text.secondary,
    },
    activeFilterText: {
        color: colors.text.white,
        fontWeight: '600',
    },
    listContent: {
        padding: spacing.md,
        paddingBottom: 100,
    },
    emptyState: {
        padding: spacing.xxl,
        alignItems: 'center',
    },
    emptyText: {
        ...typography.body,
        color: colors.text.secondary,
    },
    fab: {
        position: 'absolute',
        bottom: spacing.lg,
        right: spacing.lg,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
});

export default CompanyListScreen;
