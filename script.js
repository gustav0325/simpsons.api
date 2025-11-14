const container =document.getElementById("cards");

fetch(" https://apisimpsons.fly.dev/api/personajes?limit=50")
    .then(response => response.json())
    .then(data => {

        data.docs.forEach(personagem =>{

            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = personagem.Imagen;
            img.alt = personagem.Nombre;

            const name = document.createElement("h2");
            name.textContent = personagem.Nombre;

            const job = document.createElement("p");
            job.textContent = "Ocupação: " + personagem.Ocupacion;

            const quote = document.createElement("p");
            quote.textContent = "Frase: " + personagem.Frase;

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(job);
            card.appendChild(quote);

            container.appendChild(card);
        });
})
.catch(error => console.error("Erro ao carregar a API: ", error));