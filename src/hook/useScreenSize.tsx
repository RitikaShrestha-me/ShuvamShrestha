import { useState, useEffect } from 'react';

const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState({
		width: 0,
		height: 0,
		isMobileScreen: false
	});

	useEffect(() => {
		const handleResize = () => {
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight,
				isMobileScreen: window.innerWidth <= 760
			});
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return screenSize;
};

export default useScreenSize;