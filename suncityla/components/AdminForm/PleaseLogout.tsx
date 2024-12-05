// components/AlreadySignedIn.tsx
'use client'; // Ensure client-side rendering

import { useEffect } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogHeader } from '../ui/alert-dialog';
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';

interface PleaseLogoutInProps {
    onRedirect: () => void;
}

const PleaseLogout: React.FC<PleaseLogoutInProps> = ({ onRedirect }) => {
    useEffect(() => {
        // Redirect automatically after showing the alert
        const timer = setTimeout(() => {
            onRedirect();
        }, 2000);
        return () => clearTimeout(timer);
    }, [onRedirect]);

    return (
        <AlertDialog open={true}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>You are already signed in</AlertDialogTitle>
                    <p>Please logout first.</p>
                </AlertDialogHeader>
                <AlertDialogAction disabled>Redirecting...</AlertDialogAction>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default PleaseLogout;
