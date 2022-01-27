const { gql } = require("apollo-server");

const typeDefs = gql`
  type WeatherData {
    id: ID
    main: String
    description: String
    icon: String
  }

  type StatisticsData {
    temp: Float
    feels_like: Float
    temp_min: Float
    temp_max: Float
    pressure: Int
    humidity: Int
  }

  type WindData {
    speed: Float
    deg: Int
  }

  type City {
    cityName: String
    id: ID
    visibility: Int
    weather: WeatherData
    statistics: StatisticsData
    wind: WindData
  }
`;
