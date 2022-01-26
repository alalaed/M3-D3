

const primary = "https://api.pexels.com/v1/search?query=your-query"
const secondary = "https://api.pexels.com/v1/curated"

// const hidden = (event) =>{
//     const selected = event.target
//     console.log(selected.parentElement)

// }

const searchQuery = () => {
    const searched = document.getElementById("search-input")
    searched.value

    const third = "https://api.pexels.com/v1/search?query="+searched.value 

    return (third)

}

const hideCard = () =>{
    const cardArr = document.getElementsByClassName("chosen")
    // console.log(cardArr)

    for( let i = 0 ; i < cardArr.length ; i++){
        cardArr[i].addEventListener("click", (e) => {
            const selected =  e.target
            // const parent = selected.parentNode.parentNode.parentNode.parentNode.parentNode
            
            const card = selected.closest(".col-md-4")
            card.classList.add("hide")
        })
    }
}

    

const loadImages = (url) => {

    // if(callback === undefined ){

    console.log(url)
    fetch( url ,{         
        method: "GET",             
        headers:{
            Authorization: "563492ad6f91700001000001f1fef3be481644fea5170521a236b5a1"} })
    .then ( (response)  => response.json() )
    .then ( (data) =>{

        const photos = data.photos
        let container = document.querySelector("#main-card-container")
        container.innerHTML = ""
        photos.forEach(element => {
           const inhalt = `
            <div class=" col-md-4">
              <div class="card mb-4 shadow-sm">
                <img src="${element.src.medium}" class="card-image" id = "jord"/>
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="chosen btn btn-sm btn-outline-secondary"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${element.id}</small>
                  </div>
                </div>
              </div>
           </div>
        ` 
        container.innerHTML += inhalt
        });
        
        hideCard()
        setTimeout(function(){
            alert("There are " + photos.length)
        }, 5000)
           
    } )
// } else{

}












