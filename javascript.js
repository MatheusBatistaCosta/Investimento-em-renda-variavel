
function mudafoto (foto){
    document.getElementById("icone"). src = foto
}
function lermais(){
    var pontos = document.getElementById("pontos")
    var maistexto = document.getElementById("mais")
    var btnlermais = document.getElementById("btnlermais")

    if(pontos.style.display === "none"){
       pontos.style.display="inline"
       maistexto.style.display="none"
       btnlermais.innerHTML="lermais"
    }else{
       pontos.style.display="none"
       maistexto.style.display="inline"
       btnlermais.innerHTML="ler menos"
    }
}
