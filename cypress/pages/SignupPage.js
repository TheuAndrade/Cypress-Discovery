class SignupPage{

    go() {

       
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

    }

    fillForm(entregador) {

        cy.get('.field input[name="fullName"]').type(entregador.nome)
        cy.get('.field input[name="cpf"]').type(entregador.cpf)
        cy.get('.field input[name="email"]').type(entregador.email)
        cy.get('.field input[name="whatsapp"]').type(entregador.whatsapp)
        
        cy.get('.field input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('.field input[type="button"]').click()
        cy.wait(2000)


        cy.get('.field input[name="address-details"]').type(entregador.endereco.complemento)
        cy.get('.field input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('.field input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('.field input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('.field input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('Moto').click()
        cy.get('ul > :nth-child(1)').should('have.class', 'selected')

        cy.get('input[accept^="image"]').attachFile(entregador.cnh)
    }

    submit() {
        
        cy.get('.button-success').click()
    }

    modalMessageShouldBe(expectedMessage) {

        cy.get('#swal2-html-container').should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage) {

        cy.get('div[class="field"] span').should('have.text', expectedMessage)
    }
    
    closeModalMessage() {

        cy.wait(2000)
        cy.contains('Fechar').click()

    }

}

export default new SignupPage;