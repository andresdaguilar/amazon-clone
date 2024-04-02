import React from 'react'
import AuthLayout from '../features/auth/components/AuthLayout';
import SingInForm from '../features/auth/components/SignInForm.component';

const SignInPage = () => {
    return (
        <AuthLayout>
            <SingInForm/>
        </AuthLayout>
    )
}

export default SignInPage;