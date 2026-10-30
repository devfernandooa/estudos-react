import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { use } from 'react';

export default function ({children}) {
    const {user} = useAuth();
    if(!user) {
        return <Navigate to="/login" replace />
    }

    return children;
}