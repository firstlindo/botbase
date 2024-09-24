module.exports = (bot) => {
    bot.readyCommand({
        name: 'readyGuilds',
        channel: '$channelID',
        code: `
        $forEachGuild[1s;{};cm;endcm]
        $log[(GUILDAS): Carregando Membros das Guildas]
        `
      })

      bot.awaitedCommand({
        name: 'cm',
        code: `
        $log[(CARREGADO): $guildName[$guildID] guilda setada no cache
       \[ Guilda com $membersCount[$guildID;all;false] membros\]]
        $cacheMembers[$guildID;false]
        `
      })
      
      bot.awaitedCommand({
        name: 'endcm',
        code: `
        $log[(GUILDAS): Membros das Guildas Carregado com Sucesso]
        `
      })
}