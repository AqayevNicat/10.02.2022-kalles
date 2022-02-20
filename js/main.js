var myBtn = document.querySelectorAll("#plus");
for(let g = 0;g<myBtn.length;g++){
    myBtn[g].addEventListener("click",function(){
        var myth = this.parentElement.getElementsByClassName("open-list");
        for(var i = 0;i<myth.length;i++){
            myth[i].classList.toggle("active");
        }
    })
}