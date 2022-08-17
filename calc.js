/*function somar() {
    res.value = parseFloat(v1.value) + parseFloat(v2.value);
    
}
function subtrair (){
    res.value = parseFloat(v1.value) - parseFloat(v2.value);
}
function multiplicar(){
    res.value = parseFloat(v1.value) * parseFloat(v2.value);
}*/


/*function calcular(){
    
    if (somar.checked === true)
        
        res.value = parseFloat(v1.value) + parseFloat(v2.value);
    
    
    else if(subtrair.checked === true)
        
         res.value = parseFloat(v1.value) - parseFloat(v2.value);
    
    
    else if(multiplicar.checked === true)
        
        res.value = parseFloat(v1.value) * parseFloat(v2.value);
        
    //divisao de numero por zero
    else {
        
        if (parseFloat(v2.value ) === 0)
          res.value = 'Erro!';
        
        else
            res.value = parseFloat(v1.value)/parseFloat(v2.value);
    }
}*/

// - caixa de seleção js - //

function calcular(){
    if (op.value === '+')
       res.value = parseFloat(v1.value) + parseFloat(v2.value);

   else if(op.value === '-')
           res.value = parseFloat(v1.value) - parseFloat(v2.value);

   else if(op.value === '*')
   res.value = parseFloat(v1.value) * parseFloat(v2.value);

   else if(op.value === '/')
        if (parseFloat(v2.value)=== 0 )
            res.value = 'Erro!digite um número diferente de 0';
        else
            res.value = parseFloat(v1.value)/parseFloat(v2.value);
    else
        alert('Escolha a operação desejada!');
}

