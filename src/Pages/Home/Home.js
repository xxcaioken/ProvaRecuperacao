import React, { useState } from 'react';
import Container from '../../Components/Container/Container';
import './Home.css';

const Home =  () => {

    const title = 'Bem vindo a techTrade!!';
    const subtitle = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'; 
    return(
        <div>
            <Container img={'https://www.ideo-creation.com/wp-content/uploads/2020/09/logoTECHTRADE.jpg'} title={title} subtitle={subtitle} marginTop={false}></Container>
        </div>
    )

};
export default Home;