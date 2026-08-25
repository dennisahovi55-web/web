fetchpoke();
async function fetchpoke(){
    try{
        const pokename = document.getElementById("pokename").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
        if(!response.ok){
            throw new Error("unable to find poke")
        }
        const data = await response.json();
        const pokeimg = data.sprites.front_default;
        const img = document.getElementById("pokeimgs");
        img.src = pokeimg;
        img.style.display = 'block';
    }
    catch{
        console.error(error);
    }

}
