function fetchAge(){
    var inputAge = document.getElementById("yourName").value;
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://api.agify.io?name=" + inputAge, requestOptions)
.then(response => response.text())
.then(result => {
    console.log(result);
    var predictedAge = JSON.parse(result);
    console.log(predictedAge);
    var getAge = 
    "Name: " + 
    predictedAge.name +
    "<br>" +
    "Age: " +
    predictedAge.age +
    "<br>" +
    "Count: " +
    predictedAge.count
    document.getElementById("getAge").innerHTML = getAge;
    })
.catch(error => console.log('error', error));
}