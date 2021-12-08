const customerUrl = "https://localhost:5001/api/customers"; 
const clothingUrl = "https://localhost:5001/api/clothing";

function handleCustomerOnSubmit(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;

    var customer = {
        stylistId: 3,
        custFirstName: firstName, 
        custLastName: lastName, 
        custEmail: email, 
        custPassword: password,
        custUsername: username, 
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
function handleClothingOnLoad(){
    const allClothingUrl = "https://localhost:5001/api/clothing";
    console.log(allClothingUrl);
    
    fetch(allClothingUrl).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        displayClothingTable(json);
    }).catch(function(error){
        console.log(error);
    })
}

function displayClothingTable(json){
    var dataTable = document.getElementById("dataTable");
    var html = "<table class = \"table table-striped table-bordered table-hover\"><th>Upload ID</th><th>Clothing Name</th><th>Date Submitted</th>"
    html += "<th>Style</th><th>Season</th><th>Type</th><th>Material</th>";
    json.forEach(clothing=>{
        html += `<tr><td>${clothing.clothingId}</td><td>${clothing.clothingName}</td><td>${clothing.dateSubmitted}</td>`
        html += `<td>${clothing.clothingStyle}</td><td>${clothing.clothingSeason}</td><td>${clothing.clothingType}</td><td>${clothing.clothingMaterial}</td></tr>`;
    });
    html += "</table>";
    
    dataTable.innerHTML=html;
}
function handleRecomOnLoad(){
    const allRecomUrl = "https://localhost:5001/api/recommendations";
    console.log(allRecomUrl);
    
    fetch(allRecomUrl).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        displayRecomTable(json);
    }).catch(function(error){
        console.log(error);
    })
}

function displayRecomTable(json){
    var dataTable = document.getElementById("dataTable2");
    var html = "<table class = \"table table-striped table-bordered table-hover\"><th>Recommendation ID</th><th>Recommendation Link</th><th>Recommendation Comment</th>";
    json.forEach(recom=>{
        html += `<tr><td>${recom.recomId}</td><td>${recom.recomLink}</td><td>${recom.recomComment}</td>`
    });
    html += "</table>";
    
    dataTable.innerHTML=html;
}