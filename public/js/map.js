
            // On initialise la carte
            var carte = L.map('maCarte').setView([46.227638, 2.213749], 6);
            
            // On charge les "tuiles"
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                // Il est toujours bien de laisser le lien vers la source des données
                attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                minZoom: 1,
                maxZoom: 20
            }).addTo(carte);

            let xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = () => {
                // La transaction est terminée ?
                if(xmlhttp.readyState == 4){
                    // Si la transaction est un succès
                    if(xmlhttp.status == 200){
                        // On traite les données reçues
                        let donnees = JSON.parse(xmlhttp.responseText)
                        
                        
                        
                        // On boucle sur les données (ES8)
                        donnees[0].forEach(event => {
                            // Ici j'ai une seule agence
                            
                            // On crée un marqueur pour l'agence
                            let marker = L.marker([event.latitude, event.longitude]).addTo(carte)
                            marker.bindPopup(`<a href="http://kevinbillerach.sites.3wa.io/php/projet-bis/projet-x/public/index.php/event/${event.id}"> ${event.name} </a>  </br>  ${event.day}`)
                        })
                    }else{
                        console.log(xmlhttp.statusText);
                    }
                }
            }

            xmlhttp.open("GET", "http://kevinbillerach.sites.3wa.io/php/projet-bis/projet-x/public/index.php/data");

            xmlhttp.send(null);
        