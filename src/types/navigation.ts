export type AuthStackParamList = {
    welcome: undefined;
    'sign-in': undefined;
    otp: { phone: string };
    'set-password': { phone: string };
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends AuthStackParamList { }
    }
}
