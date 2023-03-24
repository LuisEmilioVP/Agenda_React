import Header from './components/header';
import ShowContacts from './components/ShowContacts';
import AddContacts from './components/AddContacts';

function App() {
	return (
		<div className="container">
			{/* Header */}
			<Header></Header>

			{/* Add Contacts */}
			<div className="App">
				<div className="container-fluid">
					<AddContacts></AddContacts>
					<ShowContacts></ShowContacts>
				</div>
			</div>
		</div>
	);
}

export default App;
