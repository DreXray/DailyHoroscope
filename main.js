console.log("loading main.js file");
const PRE_ID = "apiResponse";

let searchButton = document.getElementById["zodiacsign"];
console.log(searchButton);
    let input = document.getElementById("zodiac");
    let zodiac = input.value;
    console.log("Input Text =", zodiac);
    getHoroscope(zodiac);
    input.value="";

    function getHoroscope(){
    fetch('https://aztro.sameerkumar.website/?sign=aries&day=today'+zodiac, {
    method: 'POST',
    })
    .then(function handleResp(response){
        return (response.json());
    }) .then(function YourHoroscope(respHoroscope){
        assignColumnContent(respHoroscope);
        return respHoroscope
   
    })
    function assignColumnContent(value) {
        document.getElementById(PRE_ID).innerHTML = JSON.stringify(value);
    }
}
