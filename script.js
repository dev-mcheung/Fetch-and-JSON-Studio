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
            hoursInSpaceList.sort();
            console.log(hoursInSpaceList);
            for(let i=0; i<json.length; i++){
                for(let j=0; j<json.length; j++){
                    console.log(typeof json[j].hoursInSpace);
                    if(json[j].hoursInSpace === hoursInSpaceList[i]){
                        let emptyList = [];
                        emptyList.push(json[j].skills);
                        container.innerHTML += `
                            <div class="astronaut">
                                <div class="bio">
                                    <h3>${json[j].firstName} ${json[j].lastName}</h3>
                                    <ul>
                                        <li>Hours in space: ${json[j].hoursInSpace}</li>
                                        <li>Active: ${json[j].active}</li>
                                        <li>Skills: ${emptyList[0].join(', ')}
                                    </ul>
                                </div>
                                <img class="avatar" src="${json[j].picture}">
                            </div>
                        `
                    }
                }
            }
        });
    });
});