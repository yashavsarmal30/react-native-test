export interface Company {
    id: string;
    name: string;
    registrationNumber: string;
    gstNumber: string;
    email: string;
    website?: string;
    phone: string;
    address: string;
    status: 'active' | 'suspended';
    adminName: string;
    adminEmail: string;
    adminPhone: string;
    createdAt: string;
    totalProjects: number;
    activeProjects: number;
    totalUsers: number;
    bankDetails?: {
        bankName: string;
        accountNumber: string;
        ifscCode: string;
        branch: string;
    };
}

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: 'SUPER_ADMIN' | 'COMPANY_ADMIN' | 'USER';
    createdAt: string;
    lastLogin: string;
}

export interface SystemAlert {
    id: string;
    type: 'new_company' | 'suspension' | 'warning';
    message: string;
    timestamp: string;
}

export type RootStackParamList = {
    MainTabs: undefined;
    Login: undefined;
    CompanyDetails: { companyId: string };
    CreateCompany: undefined;
    SuspendCompany: { companyId: string; companyName: string };
    EditProfile: undefined;
    ChangePassword: undefined;
};

export type TabParamList = {
    Dashboard: undefined;
    Companies: undefined;
    Profile: undefined;
};
