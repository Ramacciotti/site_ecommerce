// CRIA VARIAVEL PARA REFERENCIAR O MENU LATERAL
var MENU_LATERAL = document.getElementById('NAVBAR_LINHA_DOIS');

// FAZER O MENU SE RECOLHER AO CARREGAR A PÁGINA
MENU_LATERAL.style.display = "none";

function ABRIR_MENU() {

    // SE O MENU NÃO ESTIVER ABERTO...
    if(MENU_LATERAL.style.display == "none"){

        // ABRIR MENU
        MENU_LATERAL.style.display = "block";
    
    // SE O MENU JÁ ESTIVER ABERTO...
    } else {

        // FECHAR MENU
        MENU_LATERAL.style.display = "none";

    }

}
