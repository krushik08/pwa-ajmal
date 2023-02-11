import React, { useEffect, useState } from 'react';

const useMobileView = props => {
    const [mobileView, setMobileView] = useState(true);

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 991.98
                ? setMobileView(prevState => true)
                : setMobileView(prevState => false);
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());
        return () => {
            window.removeEventListener('resize', () => setResponsiveness());
        };
    }, []);
    return mobileView;
};

export default useMobileView;
