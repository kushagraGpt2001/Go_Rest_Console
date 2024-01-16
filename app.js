let responseBody = document.getElementById("responseBody");
let requestBody = document.getElementById("requestBody");
let requestMethod = document.getElementById("requestMethod");
let requestUrlErrMsg = document.getElementById("requestUrlErrMsg");
let responseStatus = document.getElementById("responseStatus");
let requestUrl = document.getElementById("requestUrl");
let consoleForm = document.getElementById("consoleForm")
let errorMessage = document.getElementById("errorMessage")


function status(jsonData) {
    responseStatus.value = jsonData.code;
    responseBody.value = JSON.stringify(jsonData.data);
    console.log(jsonData)
}

function fetchUrl() {
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: `${requestMethod.value}`,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer e69fe921655145167bff0e079e847db007887b3b1f0ff5e8115a3d22b6864605"
        },
        body: requestBody.value
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            status(jsonData);
        })
}
requestBody.addEventListener("blur",function(event){
    if(event.target.value === ""){
        errorMessage.textContent = "Required*";
        errorMessage.classList.add("error-message","mt-3");
        requestBody.classList.add("text-ar")
    }else{
        errorMessage.textContent = "";
        requestBody.classList.remove("text-ar")
    }
    
})


consoleForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if(requestBody.value === ""){
        errorMessage.textContent = "Required*";
        errorMessage.classList.add("error-message","mt-3");
        requestBody.classList.add("text-ar")
    }else{
        errorMessage.textContent = "";
        requestBody.classList.remove("text-ar")
    }
    
    fetchUrl()
})