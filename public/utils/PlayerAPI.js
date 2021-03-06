// src/views/EagletonWebDesigns/PlayerAPI.js
console.log( "Mounting PlayerAPI.js ..." );

// A simple data API that will be used to get the data for components. 
const PlayerAPI = {
    players: [
        { number: 1, name: "Ben Blocker", position: "G" },
        { number: 2, name: "Dave Defender", position: "D" },
        { number: 3, name: "Sam Sweeper", position: "D" },
        { number: 4, name: "Matt Midfielder", position: "M" },
        { number: 5, name: "William Winger", position: "M" },
        { number: 6, name: "Fillipe Forward", position: "F" },
        { number: 7, name: "Stephen Superbowl", position: "F" }
    ],
    all: function() { return this.players },
    get: function( id ) {
        const isPlayer = p => p.number === id
        return this.players.find( isPlayer )
    }
}

export default PlayerAPI

// eof
