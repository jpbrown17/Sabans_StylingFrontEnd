const customerUrl = "https://localhost:5001/api/customers"; 
const clothingUrl = "https://localhost:5001/api/clothing";

function handleCustomerOnSubmit(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var customer = {
        stylistId: 3,
        custFirstName: firstName, 
        custLastName: lastName, 
        custEmail: email, 
        custPassword: password,
        infoId: 1,
        subId: 1
    }
    addCustomer(customer); 
}
function addCustomer(customer){
    const postCustomerUrl = customerUrl; 

    fetch(postCustomerUrl,{
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json', 
        },
        body: JSON.stringify(customer)
    }).then((response)=>{
    console.log(response);
    })
}

function handleClothingOnSubmit(){
    var name = document.getElementById("clothingname").value; 
    var style = document.getElementById("style").value;
    var season = document.getElementById("season").value;
    var type = document.getElementById("type").value;
    var material = document.getElementById("material").value;
    var color = document.getElementById("color").value;

    var clothing = {
        clothingName: name,
        clothingStyle: style,
        clothingSeason: season,
        clothingType: type,
        clothingMaterial: material,
        clothingColor: color, 
        deleted: false
    }
    addClothing(clothing); 

}
function addClothing(clothing){
    const postClothingUrl = clothingUrl;

    fetch(postClothingUrl,{
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(clothing)
        })
}