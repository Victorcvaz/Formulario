const nomeA = [];
const usuarioA = [];
const senhaA = [];
const confirmsenhaA = [];
const emailA = [];
let email = ''
let nome = ''
let usuario = ''
let senha = ''
let confirmsenha = ''

document.querySelector(".btn").addEventListener('click', () => {
    if(email === ""){
        alert("Digite um email valido")
    }else{
    document.querySelector(".a-aside").classList.toggle("aside-show")
    }
})

document.querySelector('#endpage').addEventListener('click', () =>{
    document.querySelector(".a-aside").classList.toggle("aside-show")
})


document.querySelector("#email").addEventListener('change', () =>{
    email = document.querySelector("#email").value
})
document.querySelector('.nome').addEventListener('change', () =>{
    nome = document.querySelector('.nome').value
})
document.querySelector('.usuario').addEventListener('change', () =>{
    usuario = document.querySelector('.usuario').value
})
document.querySelector('.pass').addEventListener('change', () =>{
    senha = document.querySelector('.pass').value
})
document.querySelector(".cpass").addEventListener('change', () =>{
    confirmsenha = document.querySelector(".cpass").value
})


document.querySelector('.btn-aside').addEventListener('click', ()=> {
    if(nome === "" || email === "" || usuario === '' || senha === "" || confirmsenha === ""){
        alert("Confirme os dados e tente novamente")
    }else{
    const checkb = document.querySelector(".check").checked
    if(checkb){
        confirmsenhaA = Number(confirmsenhaA)
        senha = Number(senha)
        emailA.push(email)
        nomeA.push(nome)
        usuarioA.push(usuario)
        senhaA.push(senha)
        confirmsenhaA.push(confirmsenha)
    }else{
        alert("Confira os dados e tente novamente, verifique a caixa de confirmação para termos de uso")
        }
    }
})


// função map para gerar usuarios?

/*
let listadeusuarios;

const enviarDados = (objetoPerson) => {
    console.log(`Cadastro: ${objetoPerson.nome}<br>${objetoPerson.usuario}<br>${objetoPerson.email}`)
}

listadeusuarios = emailA.map((email) =>{
    return { email: email }
})
*/






















