import React, { useState, useEffect } from "react";
import { View, FlatList, Text, ActivityIndicator, StyleSheet, Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import WeatherCard from "../ErickApp5C/app/components/WeatherCard";

interface ForecastData {
  day: string;
  date: string;
  maxTemp: number;
  minTemp: number;
  rainChance: number;
  condition: string;
}

const API_KEY = "4abccf4c84194046bd4181417252402"; // Reemplázalo con tu clave de WeatherAPI

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<ForecastData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permiso denegado", "No se puede obtener la ubicación sin permiso.");
        setLoading(false);
        return;
      }

      const userLocation = await Location.getCurrentPositionAsync({});
      console.log("Ubicación obtenida:", userLocation.coords); // Depuración
      setLocation({
        lat: userLocation.coords.latitude,
        lon: userLocation.coords.longitude,
      });
    } catch (error) {
      console.error("Error obteniendo ubicación:", error);
      Alert.alert("Error", "No se pudo obtener la ubicación.");
      setLoading(false);
    }
  };

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=5&aqi=no&alerts=no`
      );
      console.log("Respuesta de la API:", response.data); // Depuración
      const forecast: ForecastData[] = response.data.forecast.forecastday.map((day: any) => ({
        day: new Date(day.date).toLocaleDateString("es-ES", { weekday: "long" }),
        date: new Date(day.date).toLocaleDateString("es-ES"),
        maxTemp: day.day.maxtemp_c,
        minTemp: day.day.mintemp_c,
        rainChance: day.day.daily_chance_of_rain,
        condition: day.day.condition.text,
      }));
      setWeatherData(forecast);
      console.log("Datos del clima:", forecast); // Depuración
    } catch (error) {
      console.error("Error obteniendo datos del clima:", error);
      Alert.alert("Error", "No se pudo obtener el pronóstico del clima.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getLocation();
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (location) {
      fetchWeather(location.lat, location.lon);
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pronóstico del Clima</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#3498db" />
      ) : weatherData.length > 0 ? (
        <FlatList
          data={weatherData}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => <WeatherCard {...item} />}
        />
      ) : (
        <Text>No hay datos disponibles.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ecf0f1",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});

export default App;