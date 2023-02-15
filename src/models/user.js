import { Schema, model } from 'mongoose'

const user = new Schema({

    id: { type: String, unique: true, required: true },

    riotAccount: { type: String, unique: true, default: null },

    isPlaying: { type: Boolean, default: false },
    isQueueing: { type: Boolean, default: false },
    hasBan: { type: Boolean, default: false },

    banTime: { type: Number, default: 0 },
    banReason: { type: String, default: null }
    
});

export const User = model("User", user)