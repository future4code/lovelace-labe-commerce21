import React from "react"
import styled from "styled-components";

const Img =styled.img`
width: 100px;`

const Container = styled.div`
width: 100px;
border:1px solid black;
text-align:center;`

const Produtos = (props) => {
    return (
        <Container>
            <Img src={props.img}/>
            <div>{props.nome}</div>
            <div>{props.preco}</div>
        </Container>
    )
}
export default Produtos;
