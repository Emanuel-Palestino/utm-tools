import { useState } from "react"

const StudentForm = () => {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Realiza alguna acción con los datos del formulario, por ejemplo, enviarlos a un servidor.
  };
  return (

    <div className="max-w-md mx-auto mt-5 p-4 border rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Formulario de ejemplo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-600">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="w-full p-2 border rounded-md"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="correo" className="block text-gray-600">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            className="w-full p-2 border rounded-md"
            placeholder="correo@example.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;