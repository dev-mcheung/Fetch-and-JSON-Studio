window.addEventListener("load", function(){
    this.console.log("Window loaded.");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then( function(json){
            let container = document.getElementById("container");
            let hoursInSpaceList = [];
            let hoursInSpaceListSorted = [];
            for(let k=0; k<json.length; k++){
                hoursInSpaceList.push(Number(json[k].hoursInSpace));
            }
            hoursInSpaceList.sort(function(a, b){hoursInSpaceListSorted.push( a-b)});
            console.log(hoursInSpaceListSorted);
            for(let i=0; i<json.length; i++){
                let emptyList = [];
                emptyList.push(json[i].skills);
                container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li>Active: ${json[i].active}</li>
                                <li>Skills: ${emptyList[0].join(', ')}
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                    </div>
                `
            }
        });
    });
});