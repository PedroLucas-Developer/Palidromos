let Numero = document.querySelector('#Numero');

Numero.addEventListener("blur", function(e) {
   let Numero_ = this.value.replace( /\D/g , ""); // Retira todos os caracteres que nao sao numeros

   var Resposta = Palindromos(Numero_);

   if(Resposta == true) { // verifica se o cpf tem 11 numeros
      document.getElementById("Numero_resposta").innerHTML = "E um Palidromos";
   }
   else {
      document.getElementById("Numero_resposta").innerHTML = "Nao e um Palidromos";
   }

});

function Palindromos(Numero_){
   var Array_numero = Criar_Array(Numero_);

   var Array_DeCrecente = Criar_Array_DeCrecente(Numero_);

   return JSON.stringify(Array_numero) === JSON.stringify(Array_DeCrecente);
}

function Criar_Array_DeCrecente(Numero_){
   let Novo_Numero = num => Number(num);
        
   var Array_numero = Array.from(String(Numero_), Novo_Numero);

   Array_DeCrecente = Array_numero.reverse();

   return Array_DeCrecente;
}

function Criar_Array(Numero_) {
   let Novo_Numero = num => Number(num);
        
   var Array_numero = Array.from(String(Numero_), Novo_Numero);

   return Array_numero;
}