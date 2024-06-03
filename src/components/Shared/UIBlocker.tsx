import React, { ReactNode } from 'react';
import { Skeleton, Spinner } from '@fluentui/react-components';
import classnames from 'classnames';

interface UIBlockerProps {
    children: ReactNode;
    blocking: boolean;
    className?: string;
}

const UIBlocker = ({ children, blocking, className }: UIBlockerProps) => {
    return (
        <div className={classnames('relative', className)}>
            {children}
            {blocking && (
                <div className="absolute inset-0 flex justify-center items-center z-10 bg-white bg-opacity-70">
                    <div className='loader'><Spinner /></div>
                </div>
            )}
        </div>
    );
};

export default UIBlocker;
