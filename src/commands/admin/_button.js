import { ButtonBuilder, ButtonStyle, ActionRowBuilder } from 'discord.js'

const { Danger, Link, Primary, Secondary, Success } = ButtonStyle

export function JoinQueueButton() {
    return new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId("queue_join").setStyle(Success).setLabel("Entrar na fila")
    )
}