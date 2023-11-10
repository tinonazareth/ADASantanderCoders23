import MeuComponente from "./componets/MeuComponente"
function App() {
  
  return (
    <div>
      <h1>Olá Mundo</h1>
      <MeuComponente />
      <Botao conteudo= 'Clique me'/>
      <Botao conteudo= 'Mais uma vez' />
      <Botao conteudo= 'Novamente'/>
      {/* /* <Elemento imagem='url' titulo='exemplo titulo' subtitulo='exemplo subtitulo'  ( serve pra reutilizar com props apenas trocando as propiedades />*/}
    </div>
    
  )
}

function Botao(props) {
  return (
    <button>{props.conteudo}</button>
     
    
  )
}



export default App

// Estados e eventos