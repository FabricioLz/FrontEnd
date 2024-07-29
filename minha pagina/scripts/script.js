function mostrarSenha(){
    var inputPass = document.getElementById('senha');
    var btnShowSenha = document.getElementById('btn-password');
    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text'); /*olho ver senha*/
        btnShowSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        inputPass.setAttribute('type', 'password');
        btnShowSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}
function theme() {
    var moonTheme = document.getElementById('moon'); /*icone theme*/

    if (moonTheme.classList.contains('bi-moon-fill')) {
        moonTheme.classList.remove('bi-moon-fill');
        moonTheme.classList.add('bi-brightness-high-fill');
    }       else {
         moonTheme.classList.remove('bi-brightness-high-fill');
        moonTheme.classList.add('bi-moon-fill');
    }
}