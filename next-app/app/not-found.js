import React from 'react';
import Link from 'next/link';
const notfound = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <h1 className="text-2xl">Page Not Found</h1>
            <Link href="/" className='text-xl bg-blue-500 p-3'>Go Back</Link>
        </div>
    );
};

export default notfound;