import React, { ReactNode } from 'react';
import { Skeleton, SkeletonItem } from '@fluentui/react-components';
import classnames from 'classnames';

interface UISkeletonProps {
	children: ReactNode;
	blocking: boolean;
	className?: string;
}

const UISkeleton = ({ children, blocking, className }: UISkeletonProps) => {
	return (
		<div className={classnames('relative', className)}>
			{blocking ? (
				<Skeleton>
					<SkeletonItem shape="rectangle" size={64}/>
					<br />
					<SkeletonItem size={48} />
					<br />
					<SkeletonItem size={32} />
					<br />
					<SkeletonItem size={32} />
					<br />
					<SkeletonItem size={32} />
					<br />
					<SkeletonItem size={32} />
				</Skeleton>
			) : children}
		</div>
	);
};

export default UISkeleton;
