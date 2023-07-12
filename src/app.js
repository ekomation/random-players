//import 'bulma/css/bulma.css';
import {useState} from 'react';
import Playershow from './PlayerShow';
import './app.css';



function App(){
	const names = ['Ronaldo', 'Messi', 'Neymar'];
	const [randnames, setRandnames] = useState([]);




	const randomName = () => {
		const changes = names[Math.floor(Math.random() * names.length)];
		//randnames.push(changes);
		setRandnames([...randnames, changes]);
	}

	const getPlayer = randnames.map((rand, ind) => {
		return <div><Playershow type = {rand} index = {ind} /> 

			
		</div>

	})

	return(


		 <div className = 'app'> 
		

		 <button className = 'button' onClick = {randomName} > Show a random player </button> <br />

		 <div className = 'image-list'> {getPlayer} </div>
		 


		 </div>

);
}


export default App;