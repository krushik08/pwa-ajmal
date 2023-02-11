import React from 'react';

const DayIcon = props => {
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
                    d="M30 44.0625C37.7665 44.0625 44.0625 37.7665 44.0625 30C44.0625 22.2335 37.7665 15.9375 30 15.9375C22.2335 15.9375 15.9375 22.2335 15.9375 30C15.9375 37.7665 22.2335 44.0625 30 44.0625Z"
                    stroke={props.color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M30 8.4375V3.75"
                    stroke={props.color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M14.7422 14.7422L11.4375 11.4375"
                    stroke={props.color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M8.4375 30H3.75"
                    stroke={props.color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M14.7422 45.2559L11.4375 48.5605"
                    stroke={props.color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M30 51.5625V56.25"
                    stroke={props.color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M45.2578 45.2559L48.5625 48.5605"
                    stroke={props.color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M51.5625 30H56.25"
                    stroke={props.color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M45.2578 14.7422L48.5625 11.4375"
                    stroke={props.color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </>
    );
};

export default DayIcon;
