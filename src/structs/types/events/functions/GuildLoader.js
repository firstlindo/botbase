module.exports = (bot) => {
    bot.loopCommand({
        name: "guildLoader",
        channel: "", // Troque para o ID de um canal que seu bot esteja.
        executeOnStartup: false,
        every: "10800000",
        code: `
    $forEachGuild[1s;{};cm2;endcm2]
    $log[(LOADER): Carregamento de Membros de Guildas sendo feita]
    `
    })
    
    bot.awaitedCommand({
        name: 'cm2',
        type: 'awaited',
        code: `
    $log[(CARREGADO): $guildName[$guildID] guilda setada no cache
   \[ Guilda com $membersCount[$guildID;all;false] membros\]]
    $cacheMembers[$guildID;false]
    `
    })

    bot.awaitedCommand({
        name: 'endcm2',
        type: 'awaited',
        code: `
    $log[(LOADER): Membros das Guildas Carregado com Sucesso]
    `
    })
}