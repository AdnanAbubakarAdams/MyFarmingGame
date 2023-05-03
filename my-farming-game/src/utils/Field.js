// Create a matrix that is 10x10 representing a farming field with 
// W = water (10-15%)
// H = house (1 in 100)
// L = land (55%)
// F = forest (35%)


export default class Field {

    constructor() {
        this.tiles = [];

        // choose a random number between 0-9 for house row
        let houseRowIndex = Math.floor(Math.random() * 10);

        // ten times // create house rows
        for (let i = 0; i < 10; i++) {
            // creating row
            let row = this.createRow(i === houseRowIndex);
            // push row into the field
            this.tiles.push(row);
        }
    }

    // create row method 
    createRow (hasHouse) {
        let houseIndex;

        // if has house or there is a house
        if (hasHouse) {
            // generate random number between 0 and 9
            houseIndex = Math.floor(Math.random() * 10);
        }

        // create array for row
        let row = [];

        // 10 times 
        for (let i = 0; i < 10; i++) {

            if (i === houseIndex) {
                row.push("H");
                continue;
            }

            // create a tile
            let tile = this.createTile();
            // push tile into row
            row.push(tile);
        }

        return row;
    }

    // create tile method
    createTile () {
        // 15% chance to create water
        // 30% chance to create forest
         // 55% chance to create land

         let num = Math.floor(Math.random() * 100);

         if (num < 15) {
            return "W";
         } else if (num < 45) {
            return "F";
         } else {
            return "L";
         }
    }
}