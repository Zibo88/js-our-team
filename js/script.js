// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.


// creo un array per contenere gli oggetti

const teamMembersArray = [
    // primo membro
    {
        name: 'Angela Carrol',
        ruolo: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    // secondo membro
    {
        name: 'Walter Gordon',
        ruolo: 'Office Manage',
        photo: 'walter-gordon-office-manager.jpg'
    },
    // terzo membro
    {
        name: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    // quarto membro
    {
        name: 'Scott Estrada',
        ruolo: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    // quinto membro
    {
        name: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        photo: 'barbara-ramos-graphic.jpg'
    }
    
]
    
// richiamo il container delle card dove appendere le card
const teamContainer = document.querySelector('.team-container');

// scorro l'array deggli oggetti

for(i = 0; i < teamMembersArray.length; i++){
    // scorro gli oggetti dentro l'array
    const teamMembers = teamMembersArray[i];
    console.log(teamMembers);

    // creo variabile per poi appendarla
    const teamToWrite = `
    <div class="team-card">
        <div class="card-image">
            <img src=${teamMembers.photo}"/>
        </div>
        
        <div class="card-text">
            <h3>${teamMembers.name}</h3>
            <h3>${teamMembers.lastName}</h3>
            <p>${teamMembers.ruolo}</p>
        </div>
    </div>`
    

  console.log(teamToWrite)
  console.log(teamMembers.photo)
  console.log(teamMembers.name)
  console.log(teamMembers.lastName)
  console.log(teamMembers.ruolo)
  console.log(teamToWrite)


  teamContainer.innerHTML += teamMembers;

  console.log(teamContainer);
  
  
}
 