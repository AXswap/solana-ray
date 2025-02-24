"use client";

import React from 'react';
import Navbar from '@/components/Navbar';

const Staking: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-4xl font-bold mb-4">质押页面</h1>
            </div>
        </div>
    );
};

export default Staking;
