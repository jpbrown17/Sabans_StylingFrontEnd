const allRecomUrl = "https://localhost:5001/api/recommendations";

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
    var html = "<table class = \"table table-striped table-bordered table-hover\"><th>Customer ID</th><th>Upload ID</th><th>Clothing Name</th><th>Date Submitted</th>"
    html += "<th>Style</th><th>Season</th><th>Type</th><th>Material</th>";
    json.forEach(clothing=>{
        html += `<tr><td>${clothing.custId}</td><td>${clothing.clothingId}</td><td>${clothing.clothingName}</td><td>${clothing.dateSubmitted}</td>`
        html += `<td>${clothing.clothingStyle}</td><td>${clothing.clothingSeason}</td><td>${clothing.clothingType}</td><td>${clothing.clothingMaterial}</td></tr>`;
    });
    html += "</table>";
    
    dataTable.innerHTML=html;
}
function handleRecomOnSubmit(){
    var custId = document.getElementById("custId").value; 
    var styId = document.getElementById("stylistId").value;
    var recomLink = document.getElementById("recomLink").value;
    var recomComment = document.getElementById("recomComment").value;

    var recom = {
        custId: custId,
        stylistId: styId,
        recomLink: recomLink,
        recomComment: recomComment,
        deleted: false
    }
    addRecom(recom); 
}
function addRecom(recom){
    const postRecomUrl = allRecomUrl;

    fetch(postRecomUrl,{
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(recom)
        })
}