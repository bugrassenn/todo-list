
let btnDOM = document.querySelector("#liveToastBtn") // ekle butonunu seçiyoruz.
let listDOM = document.querySelector("#list") // listenin bulunduğu kısımı seçiyoruz.
let taskDOM = document.querySelector("#task") // taskın bulunduğu kısımı seçiyoruz.




btnDOM.addEventListener('click', elemanEkle) // buttona click olduğunda eleman ekle adında fonksiyon atıyoruz

function elemanEkle() {
    let task = taskDOM.value // taskın valuesinni eşitledim tekrar tekrar kullanmamak için.
    if ( task.trim() == "") { // eğer task boş işe bir şey yapma 
        $(document).ready(function () { // toats kullanımı buşekilde hazır alındı bak....
            $('.error').toast('show');
        });
        // console.log("dur")
    }
    else 
    { // task içinde öğe var  ise 
        let liDOM = document.createElement("li")  // li oluştur
        liDOM.innerHTML = taskDOM.value// task in içindeki değeri liDOM un innerHTMl ine ekle
        listDOM.append(liDOM); // listeye lidom u ekle 
        taskDOM.value = "" // taskı temizle
        $(document).ready(function () {
            $('.success').toast('show'); //toast kullanımı araştırıldı eklendi.
        });
        
        let closeButton=document.createElement("span");
            closeButton.textContent = "\u00D7";
            closeButton.classList.add("close");
            liDOM.append(closeButton); // closebutton u lidom a eklendi - lidom li elementidir.
            closeButton.onclick = removeItem // removeItem fonksiyonu çalışıyor.
    }
}

function removeItem () { // çarpıya basınca li elementinin silinmesi 
    this.parentElement.remove()        
}



listDOM.addEventListener('click', function(ev) {  // li elementlerine tıklandığında classlist olarak checked classının eklenmesi ve silinmesi
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked'); // toogle fonksiyonu...çalıştırıldı yani eğer checked varsa çıkart yoksa ekle .... 
  }
}, false);





