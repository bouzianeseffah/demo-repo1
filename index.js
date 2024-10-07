// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//      .then(responce => {
//           if(!responce.ok ){
//              throw new Error('could not fetch resource')
//           }
//           return responce.json()
//      })
//      .then(data => console.log(data.name))
//      .catch(error => console.error(error))

async function fetchData(){
     try {
          const pokemonName = document.getElementById('pokemoneName').value.toLowerCase();
          
          const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          if(!responce.ok) {
               throw new Error('could not fetch resource')
          }
          const data = await responce.json();
           //console.log(data)
           const pokemoneSprite = data.sprites.front_default;
           const imgElement = document.getElementById('pokemonSprite');
           imgElement.src = pokemoneSprite;
           imgElement.style.display = 'block';
     } catch (error) {
          console.error(error);
     }
}
