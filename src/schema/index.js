const { gql } = require("apollo-server");

const typeDefs = gql`
  type StatisticsData {
    temp: Float
    feels_like: Float
    temp_min: Float
    temp_max: Float
    pressure: Int
    humidity: Int
    windSpeed: Float
    windDeg: Float
  }

  type Weather {
    id: ID
    cityName: String
    visibility: Int
    iconUrl: String
    description: String
    statistics: StatisticsData
  }

  type Query {
    weather(cityName: String!): Weather
  }
`;

module.exports = typeDefs;
