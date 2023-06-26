'use client';

const ErrorWrapper = ({ error }: { error: Error }) => {
	return <h1>{error.message}</h1>;
};

export default ErrorWrapper;
