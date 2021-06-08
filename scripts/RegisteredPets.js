import { getPets, getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()


export const RegisteredPets = () => {

    document.addEventListener(
        "click",
        (event) => {
    
            if (event.target.id.startsWith("pet")) {
                const [, petId] = event.target.id.split("--") 
    
                const petIdNumber = parseInt(petId) 
                for (const pet of pets) {
                    if ( pet.id === petIdNumber) {
                        const petWalker = pet.walkerId
                        
                        let assignedWalker = 0;
            
                        for (const walker of walkers) {
                            if (walker.id === petWalker) {
                                assignedWalker = walker.name
           
                            } 
                        }
        window.alert(`${event.target.innerText} is being walked by ${assignedWalker}.`)
                    }   
                }   
            }
        }
    )

    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

