const loadData = () =>{
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => showData(data))
  .catch( err => console.log(err))
}

const  showData= (data) =>{
    // post-info where set up data
    const postInfo = document.getElementById("post-info")
    for(let singleData of data.slice(0,5)){
      //ccreate div 
      console.log(singleData)

      const placeData = document.createElement("div")
      placeData.innerHTML = `
        <h1 class="text-4xl" >${singleData.title} </h1>
        <p class="text-2xl" >${singleData.body} </p>
      
      `
      postInfo.appendChild(placeData)
    }
}
loadData()