/*function somar() {
    rest.value = parseFloat(v1.value) + parseFloat(v2.value);
    
}
function subtrair (){
    rest.value = parseFloat(v1.value) - parseFloat(v2.value);
}
function multiplicar(){
    rest.value = parseFloat(v1.value) * parseFloat(v2.value);
}*/


function calcular(op){
    
    if (op === '+')
        
        res.value = parseFloat(v1.value) + parseFloat(v2.value);
    
    
    else if(op === '-')
        
         res.value = parseFloat(v1.value) - parseFloat(v2.value);
    
    
    else if(op === '*')
        
        res.value = parseFloat(v1.value) * parseFloat(v2.value);
        
    //divisao de numero por zero
    else {
        
        if (parseFloat(v2.value ) === 0)
            res.value = 'Erro!';
        
        else
            res.value = parseFloat(v1.value)/parseFloat(v2.value);
    }
}
