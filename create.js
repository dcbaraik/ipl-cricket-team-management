function clicked() {
    console.log('clicked')
    click = document.getElementsByClassName('form-container');
    console.log(click)
    click[0].style.display = "block" 

}


submit = document.getElementById("submit");
submit.addEventListener("click",()=>{
    console.log("adding to the list ...")
    tn = document.getElementById('tname').value;
    tw = document.getElementById('towner').value;
    localStorage.clear();
    if(localStorage.getItem('itemsJson') == null){
        itemsJsonArray = [];
        itemsJsonArray.push([tn,tw]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray))

    }
    else
    {
        itemsJsonArrayStr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonArrayStr);
        itemsJsonArray.push([tn,tw]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray))

    }
    let teams = document.getElementById('create-team');
    let str = "";
    itemsJsonArray.forEach(element => {
        str = str + `<div class="team" onclick="document.location='/teams/csk/team-details.html'">
        <div class="team-logo">
            <img src="/logo/CSKroundbig.png" alt="channai super king">
        </div>
        <div class="team-name">
            <h2>${element[0]}</h2>
        </div>
        <div class="team-des">
            <p> <br>${element[1]}</p>
        </div>
    </div> `;
    });
    teams.innerHTML = str;
    localStorage.clear();
    click = document.getElementsByClassName('form-container');
    console.log(click)
    click[0].style.display = "none" 

    
});


function createplayer() {
    console.log('clicked')
    clickon = document.getElementById('playerform').style.display = "block" ;
    console.log(clickon)
    

}
function createplayeroff() {
    console.log('clicked')
    clickoff = document.getElementById('playerform').style.display = "none" ;
    console.log(clickoff)
    

}
