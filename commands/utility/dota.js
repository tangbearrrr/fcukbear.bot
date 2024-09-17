const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dota2')
		.setDescription('Invite to play Dota 2'),
	async execute(interaction) {
		await interaction.reply(`<@&${1273913827167047821}> Dota 2 Now!!!`);
	},
};