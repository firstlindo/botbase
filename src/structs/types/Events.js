const colors = require('colors/safe');

module.exports = function (bot) {
    const eventsDir = './events';

    require(`${eventsDir}/main/LoadVariables`)(bot);
    require(`${eventsDir}/main/Statuses`)(bot);
    require(`${eventsDir}/functions/Errors`)(bot);
    require(`${eventsDir}/functions/ReadyGuilds`)(bot);
    require(`${eventsDir}/functions/GuildLoader`)(bot);
    require(`${eventsDir}/functions/CustomFunctions`)(bot);


    // Tratamento de Erros.
    process.on('unhandledRejection', error => {
        console.error('Unhandled promise rejection:', error);
    });

    console.log(colors.green(`(EVENTOS): Todos os eventos carregados com Sucesso.\n(FUNÇÕES): Todas as funções carregados com Sucesso.`));
}