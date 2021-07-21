function show(){
    var s = document.querySelector(".snackbar");
    s.classList.add("show");
    
    setTimeout(() => {
        s.classList.remove("show")
    }, 2000)
}