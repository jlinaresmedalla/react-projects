import AnimalShow from './AnimalShow';
import {useState} from 'react';
import './App.css';


function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
    let randomIndex = Math.floor(Math.random()*animals.length);
    return animals[randomIndex];
}

function App(){

    const [contador, setContador] = useState(0);
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setContador(contador + 1);
        setAnimals([...animals, getRandomAnimal()]);
    }
    console.log(getRandomAnimal());
    const renderAnimals = animals.map((animal, index)=>{
        return <AnimalShow type={animal} key={index} />
    });

    return <div className='app'>
        <button onClick={handleClick}>PRESS ME</button>
        <h1>Animals to show: {contador}</h1>
        <div className='card'>{renderAnimals}</div>
    </div>;
}

export default App;