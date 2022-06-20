// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.


// creo un array per contenere gli oggetti

const teamMembersArray = [
    //primo mwmbro
    {
        name: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        photo: 'img/wayne-barnett-founder-ceo.jpg'
    },
    // secondo membro
    {
        name: 'Angela Carrol',
        ruolo: 'Chief Editor',
        photo: 'img/angela-caroll-chief-editor.jpg'
    },
    // terzo membro
    {
        name: 'Walter Gordon',
        ruolo: 'Office Manage',
        photo: 'img/walter-gordon-office-manager.jpg'
    },
    // quarto membro
    {
        name: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        photo: 'img/angela-lopez-social-media-manager.jpg'
    },
    // quinto membro
    {
        name: 'Scott Estrada',
        ruolo: 'Developer',
        photo: 'img/scott-estrada-developer.jpg'
    },
    // sesto membro
    {
        name: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        photo: 'img/barbara-ramos-graphic-designer.jpg'
    }

]


// richiamo il container delle card dove appendere le card
const teamContainer = document.querySelector('.team-container');
// richiamo il bottone 
const addBtn = document.getElementById('addMemberButton');

// creo un nuovo oggetto
const newMember = {
    name: '',
    ruolo: '',
    photo: ''
}

console.log(newMember)

// dichiaro la funzione che crea nuovi oggetti
createCard (teamMembersArray)


addBtn.addEventListener('click',
    function(){

    }
)

// scorro l'array deggli oggetti

for(i = 0; i < teamMembersArray.length; i++){
    // scorro gli oggetti dentro l'array
     const teamMembers = teamMembersArray[i];
    console.log(teamMembers);

    // creo variabile per poi appendarla
    const teamToWrite = `
    <div class="team-card">
         <div class="card-image">
            <img src= '${teamMembers.photo}'/>
         </div>
        
         <div class="card-text">
             <h3>${teamMembers.name}</h3>
             <p>${teamMembers.ruolo}</p>
         </div>
    </div>`
    

console.log(teamToWrite)
console.log(teamMembers.photo)
console.log(teamMembers.name)
console.log(teamMembers.ruolo)
console.log(teamToWrite)


teamContainer.innerHTML += teamToWrite;

//   console.log(teamContainer);
  
  
}


// FUNCTION

// creo una function per analizzare gli elementi di teamMembersArray
function createCard (newArrayObject){
    // creo un ciclo for per analizzare gli elementi dell'array
    for(i = 0; i < newArrayObject.length; i++){
        const arrayElement = newArrayObject[i];
        console.log([i])
    }
}