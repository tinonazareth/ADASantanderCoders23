import { useState } from "react";

export default function Contador() {

  console.log('renderizando meu contador...')
  const [contador, setContador] = useState(0)

  function aumentar() {
    setContador(contador + 1)
  }

  function diminuir() {
    setContador(contador - 1)
  }

  if (Contador > 5) {
    return (
      <div>
        <h1>Limite alcançado</h1>
        <button onClick={aumentar}>Aumenta</button>
        <button onClick={diminuir}>Diminui</button>
      </div>
    )

  }

  return (
    <div>
      <h3>Meu Contador: {contador}</h3>
    </div>
  )
}