const apiURL = 'https://randomuser.me/api/?results='; 

async function usuarios(URL, qty) {
   try {
    const response = await fetch(`${URL}${qty.toString()}`);
    const { results } = await response.json();
    const userArr = [];
    
    for (const user of results) {
        const newUser = {
            username: user.login.username,
            name: user.name.first,
            lastname: user.name.last,
            gender: user.gender,
            country: user.location.country,
            picture: user.picture.large,
        };
        userArr.push(newUser);
    }   
    console.log(userArr);
    return userArr;
   } catch (error) {
       console.log(error);
   }
};

usuarios(apiURL, 50);