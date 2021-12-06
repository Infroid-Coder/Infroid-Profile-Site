function userName(){
    let userName = prompt("Please enter your name:" , "");
    let nameResult = document.getElementById("nameoutput");
    if (userName == "" | userName == null) {
        nameResult.innerHTML = "There";
    }
    else {
        nameResult.innerHTML = userName;
    }
}

