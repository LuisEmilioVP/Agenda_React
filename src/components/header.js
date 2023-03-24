import React from 'react';
import imgHeader from '../assets/images/img-header.png';

function Header() {
	return (
		<div className="py-5 text-center">
			<img
				className="d-block mx-auto mb-4"
				src={imgHeader}
				alt={'Image Header'}
				width={150}
				height={150}
			/>
			<h2>Agenda Multimedia React</h2>
			<p className="lead">Registra y visualiza tus contactos.</p>
		</div>
	);
}

export default Header;
