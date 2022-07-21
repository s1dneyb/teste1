describe('DuckDuckGo', () => {
    beforeEach(() => {
      cy.visit('http://duckduckgo.com')
    })
  
    it('Quando eu realizar a busca no campo de pesquisa e pressionar o botão ENTER, Então o navegador deverá me mostrar o resultado da busca', () => {
      cy.get('#search_form_input_homepage').type('Bitcoin{enter}')
    })
  
    it('Quando eu realizar a busca no campo de pesquisa e clicar no icone de lupa, Então o navegador deverá me mostrar o resultado da busca', () => {
      cy.get('#search_form_input_homepage').type('Bitcoin')
      cy.get('#search_button_homepage').click()
  
    })
  })