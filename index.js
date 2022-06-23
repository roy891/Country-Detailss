

function countryDetails(){
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(posts => displayPosts(posts));
}

countryDetails();

function displayPosts(posts){
    //   console.log(posts);
    let postContainer = document.getElementById("posts");
    for( let post of posts){
        let singleCountry = document.createElement("div");
        singleCountry.classList.add("post");
        singleCountry.innerHTML = `
            <h3> ${post.name.common} </h3>
            
            <p> ${post.population} </p>
        `;
        postContainer.appendChild(singleCountry);
    }
}
