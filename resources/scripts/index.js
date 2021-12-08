function handleCheckLogin(){
    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value;

    var login = {
        username: username,
        password: password,
    }
    checkLogin(recom); 
}