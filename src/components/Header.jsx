import React from 'react';
import '../styles/header.css';

const Header = () => {
	return (
		<div className='nav_bar'>
			<ul className='nav container'>
				<li className='logo'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png'
						alt='PokemonLogo'
						width={150}
					/>
				</li>
				<ul className='nav_items'>
					<li>Список покемонов</li>
				</ul>
			</ul>
		</div>
	);
};

export default Header;