// pegando o modal
var modal = document.getElementById("myModal");
// pegando o elemento que abre o modal
var btn = document.getElementById("myBtn");
// pegando o span que fecha o modal
var span = document.getElementsByClassName("close")[0];
// função que abre o modal quando o usuario clica
btn.onclick = function() {
  modal.style.display = "block";
}
//  função que fecha o modal quando o usuario clica no X
span.onclick = function() {
  modal.style.display = "none";
}
//função que fecha o modal quando o usuario clica em qualquer lugar fora
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//guardar os itens - clientes - setItem
//exemplo: localStorage.setItem("nome","Henrique");
const setLocalStorage = (dbCliente) => //objeto a ser armazenado
    //O JSON.stringify() método converte um valor em uma string JSON
    //nome da chave do objeto db_client
    localStorage.setItem("db_cliente",JSON.stringify(dbCliente))

//puxar os itens - clientes 
//exemplo: let cliente = localStorage.getItem("nome");
//console.log("Meu nome é: ",cliente)
const getLocalStorage = () => 
//O JSON.parse()método que analisa uma string JSON, construindo um objeto
    JSON.parse(localStorage.getItem('db_cliente')) ?? []


//CRUD
//C - CREATE
const createCliente = (cliente) =>{ 
    const dbCliente = getLocalStorage() //puxar o array com todos os clientes["Juci","Nicole"]
    dbCliente.push(cliente) //e incluir o cliente no final do array["Juci","Nicole","Getulio"]
    setLocalStorage(dbCliente) //devolve o array para o localStorage["Juci","Nicole","Getulio"]
}

//Interação com o layout
const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')//inputs do modal
    fields.forEach(field => field.value = "")//percorrer os valores informados 
    //propriedade de acesso ao dado do elemento
    document.getElementById('nome').dataset.index = 'new'
    //mostrar no título do modal 
    document.querySelector(".modal-header>h2").textContent  = 'Novo Cliente'
}

//função para verificar se deseja cadastrar ou editar
const saveCliente = () =>{
    //obter os valores digitados pelo usuário e criar um objeto
    const cliente = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value, 
        celular: document.getElementById('celular').value,
        cidade: document.getElementById('cidade').value
    }
    //verificar o conteúdo do index
    const index = document.getElementById('nome').dataset.index 
    if(index == 'new'){
        createCliente(cliente) 
        atualizaTabela //função para atualizar a tabela 
        fecharModal() 
    }else{
        updateCliente(index,cliente)
        atualizaTabela //função para atualizar a tabela 
        fecharModal() 
    }
}


//R - READ

//U - UPDATE

//D - DELETE



//Eventos
//abrir o modal
document.getElementById("cadastrarCliente")
.addEventListener("click",createCliente)

//fechar modal
document.getElementById("modalClose")
.addEventListener("click",clearFields)
//salvar modal
document.getElementById("salvar")
.addEventListener("click",saveCliente)

/*
localStorage.setItem("nome","Paulo")

let cliente = localStorage.getItem("nome")

console.log(cliente)*/







