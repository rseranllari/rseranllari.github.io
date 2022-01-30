function showEducationDetailsUOFA(event){
    var CardUOFA = document.querySelector('#Education-UOFA');
    CardUOFA.innerHTML = "";
    CardUOFA.innerHTML = '<p>Computer Engineering<br>Bachelor\'s Degree<br>Aug 2018 - May 2021</p>';
}

function showEducationPhotoUOFA(event){
    var CardUOFA = document.querySelector('#Education-UOFA');
    CardUOFA.innerHTML = '<img alt = "UofA logo" src = "https://media-exp1.licdn.com/dms/image/C4E0BAQEJi46-9EDQ6w/company-logo_200_200/0/1519856134297?e=1649894400&v=beta&t=pJFr0UluyHhlf5AHaOxQ6kuIvjL066uCaEWva4ubWAo"><h3>University of Arkansas</h3>';
}

function showEducationDetailsNWACC(event){
    var CardUOFA = document.querySelector('#Education-NWACC');
    CardUOFA.innerHTML = "";
    CardUOFA.innerHTML = '<p>Liberal Arts<br>Associate Degree<br>Aug 2016 - May 2018</p>';
}

function showEducationPhotoNWACC(event){
    var CardUOFA = document.querySelector('#Education-NWACC');
    CardUOFA.innerHTML = '<img alt = "NWACC logo" src = "https://media-exp1.licdn.com/dms/image/C4E0BAQEyommYuJDqSQ/company-logo_200_200/0/1577977855782?e=1649894400&v=beta&t=FINNO4JB72B89EH-gaA1uyZNA0ScR6wEf-DbbO0k7aQ"><h3>NWACC</h3>';
}

$(document).ready(function(){
    $(document.click(function(){
        alert("MHM");
        $('.collapse').collapse('hide');
    }))
})