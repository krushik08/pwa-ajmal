import React from 'react';

const SpringIcon = props => {
    return (
        <>
            <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M37.5 22.5L9.375 50.625"
                    stroke={props.color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M15.0031 45C3.75312 26.25 18.7531 7.49996 50.6281 9.37496C52.5031 41.25 33.7531 56.25 15.0031 45Z"
                    stroke={props.color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </>
    );
};

export default SpringIcon;
