// Ações de interação com a página
//acessar site
//realizar pesquisa no site
//validar nome pesquisado
//adiconar ao carrinho
//validar nome 
//validar valor

const el = require('./elements').ELEMENTS;

class Logon {
  acessarSite(){
     cy.visit('https://totvs.store/').type

  }
  realizarBusca(){
     cy.get(el.sh).type("TOTVS Manufatura (Linha Datasul) - Controle de Qualidade").type('{enter}')
  }
    validarNome(){
     cy.get(el.textproduct)
       .and('contain' , "TOTVS Manufatura (Linha Datasul) - Controle de Qualidade")

  }

    adicionarCarrinho(){
       cy.get(el.verMais).click()
       cy.get(el.carrinho).click()
  }
      
    validarValor(){
         cy.get(el.precop)
           .and('contain' , "R$1.767,62")
    
  
  }

   

}
export default new Logon();