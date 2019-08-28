function verAula(){
    var sel=document.getElementById('sel');
    var janete
    var res=document.getElementById('res');
    res.innerHTML='As aulas aparecerão aqui';
    if(sel.value=='Segunda'){
        res.innerHTML='<p><strong>Segunda</strong></p>';
        janete=verDia(1);
    }else if(sel.value=="Terça"){
        res.innerHTML='<p><strong>Terça</strong></p>';
        janete=verDia(2);
    }else if(sel.value=="Quarta"){
        res.innerHTML='<p><strong>Quarta</strong></p>';
        janete=verDia(3);
    }else if(sel.value=="Quinta"){
        res.innerHTML='<p><strong>Quinta</strong></p>';
        janete=verDia(4);
    }else if(sel.value=="Sexta"){
        res.innerHTML='<p><strong>Sexta</strong></p>';
        janete=verDia(5);
    }else{
        res.innerHTML='<p><strong>Não tem Aula!!!!!!!!</strong></p>';
        return null;
    }
    for(var i=0;i<janete.length;i++){
        res.innerHTML+=`<p>${janete[i]}</p>`;
    }
    
    
}
function dia(){
    var data=new Date();
    var dia=data.getDay();
    dia++;
    console.log(dia);
    var resusu=verDia(dia);
    var cima=document.getElementById('cima');
    cima.innerHTML='';
    var diaCerto=diazin(dia);
    cima.innerHTML+='<p><strong>'+diaCerto+'</strong></p>';
    for(var i=0;i<resusu.length;i++){
        cima.innerHTML+=`<p>${resusu[i]}</p>`;
    }
}
function diazin(num){
    switch(num){
        case 1:
            return'Segunda'
            break;
        case 2:
            return'Terça'
            break;
        case 3:
            return'Quarta'
            break;
        case 4:
            return'Quinta'
            break;
        case 5:
            return'Sexta'
            break;
        default:
            break;
    }
}
function verDia(day){
    var resultado=[];
    resultado[4]='Intervalo';
    if(day==1){
        resultado[0]='Geografia';
        resultado[1]='Geografia';
        resultado[2]='Ciências';
        resultado[3]='Ciências';
        resultado[5]='Matemática';
        resultado[6]='Matemática';
    }else if(day==2){
        resultado[0]='Geografia';
        resultado[1]='História';
        resultado[2]='Português';
        resultado[3]='Ciências';
        resultado[5]='Ciências';
        resultado[6]='Matemática';
    }else if(day==3){
        resultado[0]='Matemática';
        resultado[1]='Religião';
        resultado[2]='Inglês';
        resultado[3]='Inglês';
        resultado[5]='Português';
        resultado[6]='Ed. Física';
    }else if(day==4){
        resultado[0]='História';
        resultado[1]='História';
        resultado[2]='Espanhol';
        resultado[3]='Português';
        resultado[5]='Português';
        resultado[6]='Ed. Física';
    }else if(day==5){
        resultado[0]='Artes';
        resultado[1]='Artes';
        resultado[2]='Religião';
        resultado[3]='Religião';
        resultado[5]='Português';
        resultado[5]='Português';
    }
    return resultado;
}