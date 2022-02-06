#!/usr/bin/env node

import { TOKEN } from "./token"
const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const server_id = "779637983376048158";

const commands = [
  {
    name: "mutevote",
    description: "ミュートするかどうかを投票",
  },
];

client.on("ready", async () => {
  console.log("Regisratiing commands...");
  await client.application.commands.set(commands, server_id);
  console.log("Bot Ready!");
})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  } else if (interaction.commandName === "mutevote") {
    await interaction.reply("Hello!")
  }
})

client.login(TOKEN);

