import signup from '../pages/SignupPage'


describe('Cadastro', () => {

    beforeEach(function() {

        cy.fixture('deliver').then((d)=> {
            this.deliver = d
        })

    })

    it('Usuario deve se tornar um entregador', function(){

        
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        signup.modalMessageShouldBe(expectedMessage)
        signup.closeModalMessage()
        
        
    })

    it('Usuario deve tentar logar com CPF invalido', function(){
        
        const expectedMessage = 'Oops! CPF inválido'
        
        

        signup.go()
        signup.fillForm(this.deliver.cpf_invi)
        signup.submit()
        signup.alertMessageShouldBe(expectedMessage)
       
        
        
    })  

    it('Castro com email invalido', function(){

    const expectedMessage = 'Oops! Email com formato inválido.'

    signup.go()
    signup.fillForm(this.deliver.inv_email)
    signup.submit()
    signup.alertMessageShouldBe(expectedMessage)


    })

    it('Cadastro Moto sem CNH', ()=>{

        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {

            nome: 'Pedro Paulo',
            cpf: '03982733374',
            email: 'pedropaulo@gmail.com',
            whatsapp: '71988345521',
            endereco:{
                cep: '42708860',
                rua: 'Rua Praia de Arembepe',
                numero: '33',
                complemento: 'Entre uma rua e outra',
                cidade_uf: 'Lauro de Freitas/BA',
                bairro: 'Vilas do Atlântico',  
            },
            Veiculo: 'Moto',
            cnh: 'images/images.jpg'
        
        }
        
        cy.get('.field input[name="name"]').type(entregador.nome)
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

        cy.get('button[class="button-success"]').click()
        cy.get('span[class="alert-error"]').should('have.text', 'Adicione uma foto da sua CNH')

        
    })

    it('Cadastro Bicicleta sem CNH', ()=>{

        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {

            nome: 'Pedro Paulo',
            cpf: '03982733374',
            email: 'pedropaulo@gmail.com',
            whatsapp: '71988345521',
            endereco:{
                cep: '42708860',
                rua: 'Rua Praia de Arembepe',
                numero: '33',
                complemento: 'Entre uma rua e outra',
                cidade_uf: 'Lauro de Freitas/BA',
                bairro: 'Vilas do Atlântico',  
            },
            Veiculo: 'Moto',
            cnh: 'images/images.jpg'
        
        }
        
        cy.get('.field input[name="name"]').type(entregador.nome)
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

        cy.contains('Bicicleta').click()
        cy.get('ul > :nth-child(2)').should('have.class', 'selected')

        cy.get('button[class="button-success"]').click()
        cy.get('span[class="alert-error"]').should('have.text', 'Adicione uma foto da sua CNH')


    })

    
})