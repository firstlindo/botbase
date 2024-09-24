const path = require('path');
const fs = require('fs').promises;
const {
  AoiClient,
  LoadCommands
} = require('aoi.js');
const colors = require('colors/safe');
const config = require('../config.js');

class ExtendedClient {
  constructor() {
    this.bot = new AoiClient(config.Bot);
    this.loader = new LoadCommands(this.bot);
  }

  async initialize() {
    this.loadCommands();
    this.loadFunctions();
    console.log(colors.green('(COMANDOS): Comandos Carregados com Sucesso.'));
    this.loadStructure();
    this.startBot();
  }

  async loadCommands() {
    const commandsDir = path.join(process.cwd(), 'src/commands');
    await this.loader.load(this.bot.cmd, commandsDir);
    this.loader.setColors(this.loader.themes.default);
  }

  async loadFunctions() {
    const functionsDir = path.join(process.cwd(), 'src/structs/types/functions');
    const functionFiles = await this.getFilesRecursively(functionsDir);
    for (const file of functionFiles) {
      require(file)(this.bot);
    }
  }

  async getFilesRecursively(directory) {
    const files = [];
    const readDirectory = async (currentDir) => {
      const filesAndDirs = await fs.readdir(currentDir);
      for (const fileOrDir of filesAndDirs) {
        const fullPath = path.join(currentDir, fileOrDir);
        const stats = await fs.stat(fullPath);
        if (stats.isDirectory()) {
          await readDirectory(fullPath);
        } else if (path.extname(fullPath) === '.js') {
          files.push(fullPath);
        }
      }
    }
    await readDirectory(directory);
    return files;
  }

  loadStructure() {
    const eventLoaderPath = path.join(process.cwd(), 'src/structs/types/Events');
    require(eventLoaderPath)(this.bot);
  }

  startBot() {
    console.log(colors.green(`(BOT): Bot Carregado com Sucesso.`));
  }
}

module.exports = ExtendedClient;