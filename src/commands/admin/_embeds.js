import { EmbedBuilder, Embed } from 'discord.js'

export function queueEmbed(description, image) {

    return new EmbedBuilder()
        .setTitle("Entre na fila para jogar. - Crias")
        .setDescription(description)
        .setImage(image)

}