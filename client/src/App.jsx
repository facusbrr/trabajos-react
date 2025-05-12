import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [validationResult, setValidationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `http://localhost:3000/validate/${username}`,
      );
      const data = await response.json();

      setValidationResult(data);
    } catch (error) {
      console.error("Error al validar usuario:", error);
      setValidationResult({
        validate: false,
        message: "Error de conexión con el servidor",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Validador de Usuarios</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ingresa un nombre de usuario"
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Validando..." : "Validar"}
        </button>
      </form>

      {validationResult && (
        <div
          className={
            validationResult.validate ? "result success" : "result error"
          }
        >
          <p>{validationResult.message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
