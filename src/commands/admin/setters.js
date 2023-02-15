import { SlashCommandBuilder } from 'discord.js'
import { JoinQueueButton } from './_button.js'
import { queueEmbed } from './_embeds.js'

export const data = new SlashCommandBuilder()
    .setName('set')
    .setDescription('Seta uma config')
    .addSubcommand(sub =>
        sub.setName("queue").setDescription("the queue join button.")
            .addAttachmentOption(attachment =>
                attachment.setName("picture").setDescription("the embed image")
            )
    )

export const run = async (interaction, client) => {
    await interaction.deferReply({ ephemeral: true })

    const config = await import('../../../config.json', { assert: { type: 'json' } })
    const list = config.default.superAdmin
    if (!list.includes(interaction.user.id)) return

    const command = interaction.options.getSubcommand()
    const picture = interaction.options.getAttachment("picture")

    if (command === "queue") {
        await interaction.deleteReply()

        const description = "**Queue 5v5 summoners rift - Players : \`0\`**"

        await interaction.channel.send({
            components: [JoinQueueButton()],
            embeds: [queueEmbed(description, picture)]
        })
    }

}
