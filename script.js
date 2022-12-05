let Numero = document.querySelector('#Numero');
Numero.addEventListener("blur", function(e) {
   let Numero_ = this.value.replace( /\D/g , ""); // Retira todos os caracteres que nao sao numeros
   var Resposta = Palindromos(Numero_);
   if(Resposta == true)  document.getElementById("Numero_resposta").innerHTML = "E um Palidromos";
   else document.getElementById("Numero_resposta").innerHTML = "Nao e um Palidromos";
});
function Palindromos(Numero_){
   var Array_numero = Criar_Array(Numero_);
   var numero_Detras = Criar_Array(Numero_);
   Array_ao_contrario = numero_Detras.reverse();
   return JSON.stringify(Array_numero) === JSON.stringify(Array_ao_contrario);
}
function Criar_Array(Numero_) {
   let Novo_Numero = num => Number(num);   
   var Array_numero = Array.from(String(Numero_), Novo_Numero);
   return Array_numero;
}