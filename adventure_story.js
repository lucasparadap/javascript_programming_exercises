// Premise for code:
console.log("You're a tourist trying to get from LGA Airport to the 9/11 Memorial in the Financial District");

// Initalized variables to determine outcome
let luggage = prompt("How many bags do you have? The plane allows you to take between 0 - 4 bags").trim();
let firstTravel = prompt('How would you like to get there? Please choose either "Car," "q70bus" or "m60bus."').trim().toLowerCase();
let success = true;

// Loop to will fail if tourist does not reach destination
while (success === true) {   

    //Choosing Car
    if (firstTravel === "car") {
        console.log("Your car crashed and you didn't make it. NYC can be tough :/");
        success = false;
        break

    // Choosing Q70
    } else if (firstTravel === "q70bus") {
        console.log("You get on the bus and arrive at the Jackson/Roosevelt subway stop.");

        //Choosing Train after Q70
        let secondTravel = prompt('Which train would you like to take? Options are: "R", "E," "7," or "F."').trim().toLowerCase();
            if (secondTravel === "R") {
                console.log("You arrive at Cortland street a few blocks from the memorial.");
                console.log("You walk to the memorial but find out they are only accepting guests who have two bags or less due to limited space.");
                if (luggage < "3") {
                    console.log ("Welcome to the memorial, enjoy!");
                    break;
                } else {
                    console.log("Sorry you'll have to come back another day.");
                    success = false;
                    break;
                }

            // Choosing E will yield a successful travel to memorial 
            } else if (secondTravel === "E") {
                console.log("You arrive at Chambers street a few blocks from the memorial.");
                console.log("You walk to the memorial but find out they are only accepting guests who have two bags or less due to limited space.");

                // Being admitted or not to memorial based on # of bags
                if (luggage < "3") {
                    console.log ("Welcome to the memorial, enjoy!");
                } else {
                    console.log("Sorry you'll have to come back another day.");
                    success = false;
                    break;
                }

            } else if (secondTravel === "7") {
                console.log("You end up in Hudson Yards. You are terribly lost and don't make it to your destination.");
                success = false;
                break;
            } else {
                console.log("You end up deep in Brooklyn. You are terribly lost and don't make it to your destination.");
                success = false;
                break;
            }
    
    // Choosing M60
    } else {
        console.log("You get on the bus and find yourself at 125th St and St. Nick Ave. Theres a subway nearby!");

        // Choosing train after M60
         let secondTravel = prompt('Which train would you like to take? Options are: "Cnorth", "Dnorth," "Csouth," or "Dsouth."').trim().toLowerCase();

            // Choosing Csouth will yield successful travel to memorial
            if (secondTravel === "Csouth") {
                console.log("You arrive at Chambers street a few blocks from the memorial.");
                console.log("You walk to the memorial but find out they are only accepting guests who have two bags or less due to limited storage space.");

                // Being admitted or not to memorial based on # of bags
                if (luggage < "3") {
                    console.log ("Welcome to the memorial, enjoy!");
                } else {
                    console.log("Sorry you'll have to come back another day.")
                    success = false
                    break;
                }

            } else if (secondTravel === "Cnorth") {
                console.log("You end up in Inwood... far from your destination. You are terribly lost.");
                success = false;
                break;
            } else if (secondTravel === "Dnorth") {
                console.log("You end up deep in the Bronx... far from your destination. You are terribly lost.");
                success = false;
                break;
            } else {
                console.log("You end up deep in Brooklyn... far from your destination. You are terribly lost.");
                success = false;
                break;
            }
    }
}

// Blanket failure message to console tourist
if (success === false) {
    console.log("NYC can be tough! You decide to try again tomorrow.");
}