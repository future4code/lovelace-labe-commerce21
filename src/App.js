import Produtos from './Components/Produtos';
import React from 'react';
import styled from "styled-components"
import nasa from "./imagens/nasa.jpg"
import nasa1 from "./imagens/nasa1.jpg"
import gato from "./imagens/gato.jpg"
import infantil from "./imagens/infantil.jpg"
import planetas from "./imagens/planetas.jpg"


const Filtros = styled.p`
margin-left:30px;
width:200px;
height:500px;
border:1px solid black;
text-align:center; `

const Carrinho = styled.p` 
margin-right:30px;
width:200px;
border:1px solid black;
text-align:center;`

const ContainerPai = styled.div`
display:flex; 
justify-content: space-between
;
`
export default class Home extends React.Component {


  render() {

    return (
      <ContainerPai>

        <Filtros>
          <h2>filtros</h2>
          <p>valor mínimo:</p>
          <input />
          <p>valor máximo:</p>
          <input />
          <p>busca por nome</p>
          <input />

        </Filtros>
        <Produtos 
          img={nasa}
        preco={'221,99'}
        nome={'camisa branca'}
        />
        <Produtos 
          img={nasa1}
        preco={'51,99'}
        nome={'camisa verde'} 
        />
        <Produtos 
          img={gato}
        preco={'28,99'}
        nome={'camisa azul'} 
        />
        <Produtos 
          img={infantil}
        preco={'91,99'}
        nome={'camisa bonita'} 
        />
        <Produtos 
         img={planetas}
        preco={'891,99'}
        nome={'camisa de gato'} 
        />
        <Carrinho>

          <h2>carrinho</h2>
          <button>remover </button>
          <button>remover</button>

        </Carrinho>

      </ContainerPai>
    );
  }

}
