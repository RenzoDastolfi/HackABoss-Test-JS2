//** Si configuramos la funcion para que devuelva solo los nombres de los personajes inevitablemente la lista final
// tendra nombres repetidos ya que hay personajes con el mismo nombre pero de universos diferentes
// para solucionar esto modifique la salida para que devuelva un objeto con {id, name, origin}//
 
 async function getCharactersByMonth(month) {
   try {
    const arrCharacters = [];
    
    const apiEpisodesByPage = 'https://rickandmortyapi.com/api/episode/?page=';
    const response = await fetch(`${apiEpisodesByPage}`);
    let { info } = await response.json();

    for (let i = 1; i <= info.pages; i++) {
        const apiEpisodesByPage = `https://rickandmortyapi.com/api/episode/?page=${i}`;
        const response = await fetch(`${apiEpisodesByPage}`);
        const { results } = await response.json();
        for (const episode of results) {

            if (episode.air_date.split(' ')[0] === month){
                for (const character of episode.characters) {
                    const id = character.split("/")[5];
                    if (arrCharacters.indexOf(Number(id)) === -1) {
                        arrCharacters.push(Number(id))
                    }
                }
            }
         }        
    }
    const apiCharacters = `https://rickandmortyapi.com/api/character/${arrCharacters}`;
    const responseCharacters = await fetch(`${apiCharacters}`);
    info = await responseCharacters.json();

    const finalArr = [];
    for (const character of info) {
        const characterObj = {
            id: character.id,
            name: character.name,
            origin: character.origin.name,
        };
        finalArr.push(characterObj)
    }

    return finalArr;

   } catch (error) {
       console.log(error);
   }
};

getCharactersByMonth('January')
.then((characters) => {
    console.log(characters);
})
.catch((error) => console.log(error));;