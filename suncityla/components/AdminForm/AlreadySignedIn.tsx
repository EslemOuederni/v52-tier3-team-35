// components/AlreadySignedIn.tsx
'use client'; // Ensure client-side rendering

import { useEffect } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogHeader } from '../ui/alert-dialog';
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';

interface AlreadySignedInProps {
    onRedirect: () => void;
}

const AlreadySignedIn: React.FC<AlreadySignedInProps> = ({ onRedirect }) => {
    useEffect(() => {
        // Redirect automatically after showing the alert
        const timer = setTimeout(() => {
            onRedirect();
        }, 2000); // Delay for 2 seconds before redirecting
        return () => clearTimeout(timer); // Cleanup the timeout on unmount
    }, [onRedirect]);

    return (
        <AlertDialog open={true}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>You are already signed in</AlertDialogTitle>
                    <p>You will be redirected to the admin page shortly.</p>
                </AlertDialogHeader>
                <AlertDialogAction disabled>Redirecting...</AlertDialogAction>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AlreadySignedIn;
