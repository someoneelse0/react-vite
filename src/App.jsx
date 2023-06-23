import { useState, useEffect } from 'react';
function App() {
	useEffect(()=>{
		fetch("https://pokeapi.co/api/v2/pokemon")
		.then(res=>res.json())
		.then(r=>console.log(r))
	},[])
	return (
		<>
			<ul>cheese</ul>
		</>
	);
}
export default App
