module.exports = (bot) => {
    bot.functionManager.createFunction({
        name: "$customFunc", // Exemplo de custom function.
        type: "djs",
        code: async d => {
          const data = d.util.aoiFunc(d);
          
          const message = await d.message.channel.send("Teste")
          
          data.result = message
          return {
            code: d.util.setCode(data)
          };
        }
      });
}