var dugmeler= document.getElementsByTagName("button");
var ekran= document.getElementById("ekran");
var hesapla=document.getElementById("hesapla");
var silme=document.getElementById("silme");

for(var i=0 ; i<17 ; i++){
    if(i!=0 && i!=15){
        dugmeler[i].addEventListener("click",yazdir);
    }
}

function yazdir(){
    ekran.value=ekran.value+this.value;
}

hesapla.addEventListener("click",hesap);

function hesap(){
    ekran.value=eval(ekran.value);//ekrandaki değeri eval fonksiyonu ile matematiksel işlemleri yaptırıp tekrardan ekrana yazdırıyoruz
}

silme.addEventListener("click",sil);

function sil(){
    ekran.value="";
}
