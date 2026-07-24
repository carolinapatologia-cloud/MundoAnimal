  import React from "react";
  import "../App.css"; 
  import Header from "../Components/Header.jsx";
  import Menu from "../Components/Menu.jsx";
  import CardProduto from "../Components/CardProduto.jsx";
  import Banner from "../Components/Banner.jsx";
  import Footer from "../Components/Footer.jsx";
  import Wbotao from "../Components/Wbotao.jsx";
  import Favoritecolor from "../Components/Favoritecolor.jsx";
  import Botao from "../Components/Botao.jsx";


  function App() {
    return (
      <>
        {/* Menu e Header fora da caixa central */}
        <Menu />
        <Header />

        {/* Caixa central apenas para conteúdo principal */}
        <div className="app-container">
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            <CardProduto
              nome="Gatos"
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdQ1v6CyDpPUo_VUSR9gWriEppQdJCs2_Kk0QW_gpUv55jEBGbHSILFk2&s=10"
            />
            <CardProduto
              nome="Doguinhos"
              imagem="https://i.pinimg.com/236x/10/21/f7/1021f779f177870dceea70dc0f9a6e9c.jpg"
            />
            <CardProduto
              nome="Animais Silvestres"
              imagem="https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg"
            />
          </div>
          <Botao />  
          <Banner />
          <Favoritecolor/>
        </div>
        <Footer />
        {/* Botão flutuante do WhatsApp */}
        <Wbotao />
      </>
    );
  }

  export default App;