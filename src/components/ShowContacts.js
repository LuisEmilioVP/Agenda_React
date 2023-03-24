import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Elemets
export const urlApp = 'http://www.raydelto.org/agenda.php';

const ShowContacts = () => {
	const [data, setData] = useState([]);

	const getData = async () => {
		const response = await axios.get(urlApp);
		setData(response.data);
		console.log(response);
	};

	// Get Contacts
	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<div className="row mt-3">
				<div className="col-12 col-lg-8 offset-0 offset-lg-2">
					<div className="table-responsive shadow-lg rounded">
						<table className="table table-bordered">
							<thead>
								<tr>
									<th>Nombre</th>
									<th>Apellido</th>
									<th>Teléfono</th>
								</tr>
							</thead>
							<tbody className="table-group-divider">
								{data.map((item) => (
									<tr key={item}>
										<td>{item.nombre}</td>
										<td>{item.apellido}</td>
										<td>{item.telefono}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default ShowContacts;
