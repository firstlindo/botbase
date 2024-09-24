const dotenv = require("dotenv")

dotenv.config()

module.exports = {
    Bot: {
        token: process.env.TOKEN,
        prefix: process.env.PREFIX,
        events: [
            "onMessage",
            "onInteractionCreate",
            "onJoin",
            "onMessageDelete",
            "onMessageUpdate",
            "onVoiceStateUpdate",
            "onBanAdd",
            "onBanRemove",
            "onFunctionError",
            "onChannelCreate",
            "onChannelDelete",
            "onChannelUpdate",
        ],
        intents: [
            "MessageContent",
            "Guilds",
            "GuildMembers",
            "GuildMessages",
            "GuildMessageReactions",
            "MessageContent",
            "GuildVoiceStates",
            "GuildBans",
        ],
        messageLimit: 1000,
        messageCacheLifetime: 86400,
        retryLimit: 3,
        AoiAutoUpdate: true,
        aoiLogs: true,
        respondToBots: false,
        respondOnEdit: {
            commands: true,
            suppressAllErrors: true,
            errorMessage: "Aconteceu um erro inesperado",
            alwaysExecute: true,
            time: 60000,
        },
        database: {
            type: "aoi.db",
            db: require("@akarui/aoi.db"),
            dbType: "KeyValue",
            tables: ["main"],
            securityKey: process.env.DB_TABLEKEY,
        },
    }
}