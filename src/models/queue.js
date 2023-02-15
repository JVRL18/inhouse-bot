import { Schema, model } from 'mongoose'

const queue = new Schema({

    id: { type: String, unique: true, required: true },

    players: { type: Array, default: [] },

});


queue.methods.joinSolo = function (player) {

    this.players.push({
        players: [player],
        type: 'solo'
    })
    return this.save()

}

queue.methods.joinDuo = function (player1, player2) {

    this.players.push({
        players: [player1, player2],
        type: 'duo'
    })

    return this.save()

}

queue.methods.findPlayerQueueIndex = function (player) {
    const playerAt = false

    this.players.forEach((index, players) => {
        if (players.players.includes(player)) playerAt = index
    })

    return playerAt
}

queue.methods.quit = function (player) {

    const removed = this.players.splice(this.findPlayerQueueIndex(player), 1)

    return {
        removed: removed.players
    }
    
}

export const Queue = model("Guild", queue)