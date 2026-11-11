import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  function incrementar() {
    setContador((valorAtual) => valorAtual + 1);
  }

  function decrementar() {
    setContador((valorAtual) => valorAtual - 1);
  }

  function resetar() {
    setContador(0);
  }

  return (
    <div className="pagina">
      <h1>Contador com useEffect</h1>

      <div className="contador">
        <h2>{contador}</h2>

        <div className="botoes">
          <button onClick={decrementar}>-</button>

          <button onClick={resetar}>Resetar</button>

          <button onClick={incrementar}>+</button>
        </div>
      </div>

      <p>O título da página acompanha o contador</p>
    </div>
  );
}

export default App;