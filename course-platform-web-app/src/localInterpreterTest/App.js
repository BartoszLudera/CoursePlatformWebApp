import React, { useState } from 'react';

function App() {
    const [input, setInput] = useState(''); // Stan przechowujący wprowadzony kod
    const [output, setOutput] = useState(''); // Stan przechowujący wynik wykonania kodu

    // Funkcja obsługująca wprowadzony kod i wykonująca go
    const executeCode = () => {
        try {
            const result = eval(input); // Wykonanie kodu
            setOutput(result); // Ustawienie wyniku
        } catch (error) {
            setOutput('Błąd wykonania kodu.'); // Obsługa błędu
        }
    };

    return (
        <div className="App">
            <h1>Prosty Interpreter JavaScript</h1>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Wpisz kod JavaScript tutaj"
                rows={5}
                cols={50}
            />
            <br />
            <button onClick={executeCode}>Wykonaj kod</button>
            <br />
            <div>
                <h2>Wynik:</h2>
                <p>{output}</p>
            </div>
        </div>
    );
}

export default App;
