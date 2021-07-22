import React from 'react';
import styled from "styled-components"

const Filtros = styled.p`
margin-left:50px;
width:200px;
height:500px;
border:1px solid black; `   

const Carrinho = styled.p` 
width:200px;
border:1px solid black;`    

const ContainerPai=styled.div`
display:flex; 
justify-content: space-between

;
`



function App() {
  return (
    <ContainerPai>

       <Filtros>
       <h2>filtros</h2>
       <p>valor mínimo:</p>
         <input/>
         <p>valor máximo:</p>
         <input/>
         <p>busca por nome</p>
         <input/>
         
         </Filtros>
       <header>header</header>

       <Carrinho>

        <h2>carrinho</h2>
    <button>adicionar</button>
    <button>remover</button>

       </Carrinho>

    </ContainerPai>
  );
}

export default App;
