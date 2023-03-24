import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alert } from '../functions';

const AddContacts = () => {
	const urlApp = 'http://www.raydelto.org/agenda.php';
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [telefono, setTelefono] = useState('');
	const [operation, setOperation] = useState(1);

	// Open Modal
	const openModal = (op) => {
		setNombre('');
		setApellido('');
		setTelefono('');
		setOperation(op);
	};

	// Validar que los inputs este llenos
	const validarIps = () => {
		let parameter;
		let methos;

		if (nombre.trim() === '') {
			show_alert('Debe escribir el nombre', 'warning');
		} else if (apellido.trim() === '') {
			show_alert('Debe escribir el apellido', 'warning');
		} else if (telefono.trim() === '') {
			show_alert('Debe escribir el teléfono', 'warning');
		} else {
			if (openModal === 1) {
				parameter = {
					nombre: nombre.trim(),
					apellido: apellido.trim(),
					telefono: telefono.trim(),
				};
				methos = 'POST';
			}
			// Enviar Solicitud
			enviarSolicitud(methos, parameter);
		}
	};

	const enviarSolicitud = async (methos, parameter) => {
		await axios({ method: methos, url: urlApp, data: parameter })
			.then(function (respuesta) {
				let tipo = respuesta.data[0];
				let msj = respuesta.data[1];
				show_alert(msj, tipo);

				if (tipo === 'success') {
					document.getElementById('btnCerrar').click();
				}
			})
			.catch(function (error) {
				show_alert('Error en la solicitud', 'error');
				console.log(error);
			});
	};

	return (
		<>
			<div className="row mt-3">
				<div className="col-md-4 offset-md-4">
					<div className="d-grid mx-auto">
						<button
							onClick={() => openModal(1)}
							className="btn btn-primary"
							data-bs-toggle="modal"
							data-bs-target="#modalContacts"
						>
							<i className="fa-solid fa-circle-plus"></i> Agregar Contacto
						</button>
					</div>
				</div>
			</div>

			<div id="modalContacts" className="modal fade" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<label className="h5">Nuevo Contacto</label>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<div className="input-group mb-3">
								<span className="input-group-text">
									<i className="fa-solid fa-user"></i>
								</span>
								<input
									type="text"
									id="nombre"
									className="form-control"
									placeholder="Nombre del contacto"
									value={nombre}
									onChange={(e) => setNombre(e.target.value)}
								/>
							</div>

							<div className="input-group mb-3">
								<span className="input-group-text">
									<i className="fa-solid fa-user"></i>
								</span>
								<input
									type="text"
									id="apellido"
									className="form-control"
									placeholder="Apellido del contacto"
									value={apellido}
									onChange={(e) => setApellido(e.target.value)}
								/>
							</div>

							<div className="input-group mb-3">
								<span className="input-group-text">
									<i className="fa-solid fa-phone"></i>
								</span>
								<input
									type="text"
									id="telefono"
									className="form-control"
									placeholder="Teléfono del contacto"
									value={telefono}
									onChange={(e) => setTelefono(e.target.value)}
								/>
							</div>

							<div className="d-grid col-6 mx-auto">
								<button onClick={() => validarIps()} className="btn btn-success">
									<i className="fa-solid fa-floppy-disk"></i> Guardar
								</button>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								id="btnCerrar"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddContacts;
