import { useState } from 'react';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const NavBar = () => {
	return (
		<div>
			<Navigation />
			<MobileNavigation />
		</div>
	);
};

export default NavBar;
