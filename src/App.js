import './App.css';
import { useState } from 'react';

function App() {

    const [joke, setJoke] = useState('');

    const handleClick = () => {
        fetch('https://api.chucknorris.io/jokes/random').then(
            (response) => {
                if (!response.ok) {
                    throw new Error(`Erro ao buscar piada: ${response.status}`);
                }

                response.json().then((jsonResult) => {
                    setJoke(jsonResult.value);
                })
            }
        )

    }

    return (
        <div className="App">
            <div>
                <button className="Button" onClick={handleClick}>Contar piada</button>
            </div>
            <div>
                {joke}
            </div>
        </div>
    );
}

export default App;
