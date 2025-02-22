import { useState, useEffect } from 'react';

const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
		isMobileScreen: window.innerWidth <= 560
	});

	useEffect(() => {
		const handleResize = () => {
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight,
				isMobileScreen: window.innerWidth <= 760
			});
		};

		window.addEventListener('resize', handleResize);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return screenSize;
};

export default useScreenSize;