const weather = require("./weather");

const resolvers = {
  Query: {
    weather,
  },
};

module.exports = resolvers;
