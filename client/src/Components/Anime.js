import React, {useState, useEffect} from 'react'

function Anime() {
const [animeList, setAnimeList] = useState([])
const [follow,setFollow] = useState({
  anime_id: 0,
  user_id: 0
})


useEffect( () => {
  fetch("/anime")
  .then(resp => resp.json())
  .then(anime => setAnimeList(anime))
}, [])


function handleOnClick(anime_id){
  // e.preventDefault()
fetch("/me")
.then(resp => resp.json())
.then(user => 
  setFollow({user_id: user.id, anime_id: anime_id}))
  console.log(follow)
 

  fetch("/follow", {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(follow)
  })
}

  return (
    <div className="card-group ">
    
      {animeList.map(anime => {
       return  <div className="`card mb-3 border  border-dark`" 
       key ={anime.id} 
       style={{maxWidth: "550px"}}>
         <div className="row g-0">
           <div className="col-md-4">
             <img className='img-fluid rounded-start' 
             src={anime.image} 
             alt={anime.name}>
             </img>
             <button 
              className='"btn btn-success btn-lg w-100' 
          type="button" onClick={() => handleOnClick(anime.id)}> follow
            </button>
           </div>
           <div className='col-md-8'>
             <div className="card-body">
              <strong>popularity rank: 
                <h5 className="text-info">{anime.score}</h5>
              </strong>
               <strong >Title:
                 <h5 className="text-info">{anime.name}</h5></strong>
               <strong>Description: 
                 <p className="text-info">{anime.description ? (anime.description.substr(0, 200) + "...") : "No Description"}</p></strong>
             </div>
           </div>
         </div>
       </div>
      })}
      
  </div>
  )
}

export default Anime