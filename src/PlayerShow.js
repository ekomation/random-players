import Ronaldo from './ronaldo.jpg';
import Messi from './messi.jpg';
import Neymar from './neymar.jpg';
import logo from './logo.svg';
import {useState} from 'react';
import './Playershow.css';

const playersmap = {
	Ronaldo,
	Messi,
	Neymar
}





function PlayerShow({type}){
	const likeIncrement = () =>{
	setSize(size + 1);
}
	const [size, setSize] = useState(0);

	return (
	<div className = 'image-show'>
	<div onClick = {likeIncrement} >
	<img src = {playersmap[type]} alt = 'players' className = 'images'/>
	<img src = {logo} style = {{width : 10 + 10 * size + 'px'}} alt = 'liker' className = 'logo'/>
	<h2 style = {{color : 'white'}}>{type}</h2>
	</div>
	 </div>
	 )
}

export default PlayerShow;