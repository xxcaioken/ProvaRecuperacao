import React, { useState } from 'react';
import Container from '../../Components/Container/Container';


export default function About () {

    const title = 'Sobre nós:'
    const subtitle = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'
    return(
        <Container img='https://th.bing.com/th/id/OIP.GpYax7ErxXTG3Zofu7fKTAHaDQ?rs=1&pid=ImgDetMain' title={title} subtitle={subtitle}/>
    )

};