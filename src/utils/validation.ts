export const validationRules = {
    required: (value: string) => value.trim().length > 0,
    email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    phone: (value: string) => /^[6-9]\d{9}$/.test(value),
    gst: (value: string) => /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value),
    website: (value: string) => /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(value),
    password: (value: string) => value.length >= 8,
};

export const validateField = (name: string, value: string) => {
    switch (name) {
        case 'email':
            return validationRules.email(value) ? '' : 'Invalid email address';
        case 'phone':
        case 'adminPhone':
            return validationRules.phone(value) ? '' : 'Invalid phone number (10 digits starting with 6-9)';
        case 'gstNumber':
            return validationRules.gst(value) ? '' : 'Invalid GST number (15 characters)';
        case 'password':
            return validationRules.password(value) ? '' : 'Password must be at least 8 characters';
        default:
            return validationRules.required(value) ? '' : 'This field is required';
    }
};

export const validateEmail = (email: string) => validationRules.email(email);
export const validatePhone = (phone: string) => validationRules.phone(phone);
export const validateOTP = (otp: string) => otp.length === 6 || otp.length === 4; // Basic check

export const validatePassword = (password: string) => {
    const requirements = {
        hasMinLength: password.length >= 8,
        hasUppercase: /[A-Z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    return {
        isValid: Object.values(requirements).every(Boolean),
        requirements,
    };
};
