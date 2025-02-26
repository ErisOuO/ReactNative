import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import axios from 'axios';
import Header from '../components/Header';

const clima = () => {
    type Weather = {
        date: string;
        dayOfWeek: string;
        maxTemp: number;
        minTemp: number;
        rainChance: number;
        condition: string;
    };

    const [data, setData] = useState<Weather[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const cargaDatos = async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setError('Permiso de ubicación denegado');
                    setLoading(false);
                    return;
                }

                let location = await Location.getCurrentPositionAsync({});
                const { latitude, longitude } = location.coords;

                const response = await axios.get(
                    `https://api.weatherapi.com/v1/forecast.json?key=90c15fa1617c4c96b1a31231252602&q=${latitude},${longitude}&days=5`
                );

                const forecastData = response.data.forecast.forecastday.map((day: any) => ({
                    date: day.date,
                    dayOfWeek: new Date(day.date).toLocaleDateString('es-ES', { weekday: 'long' }),
                    maxTemp: day.day.maxtemp_c,
                    minTemp: day.day.mintemp_c,
                    rainChance: day.day.daily_chance_of_rain,
                    condition: day.day.condition.text,
                }));

                setData(forecastData);
            } catch (error) {
                setError('Error al obtener los datos del clima');
            } finally {
                setLoading(false);
            }
        };

        cargaDatos();
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#6a0dad" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Header titulo="Pronóstico del Clima" />
            <FlatList
                data={data}
                keyExtractor={(item) => item.date}
                renderItem={({ item }) => (
                    <View style={[styles.card, { backgroundColor: getBackgroundColor(item.maxTemp) }]}>
                        <Text style={styles.text}>{item.dayOfWeek}</Text>
                        <Text style={styles.text}>{item.date}</Text>
                        <Text style={styles.text}>Max: {item.maxTemp}°C / Min: {item.minTemp}°C</Text>
                        <Text style={styles.text}>Probabilidad de Lluvia: {item.rainChance}%</Text>
                        <Text style={styles.text}>Tiempo: {item.condition}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const getBackgroundColor = (temp: number) => {
    if (temp <= 20) return '#87CEEB';
    if (temp > 20 && temp <= 30) return '#FFD700';
    return '#FFA500';
};

export default clima;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#4B0082',
    },
    card: {
        padding: 20,
        marginVertical: 10,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    text: {
        fontSize: 18,
        color: '#E6E6FA', 
        fontWeight: 'bold',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6a0dad',
    },
    errorText: {
        fontSize: 18,
        color: '#FFB6C1',
        fontWeight: 'bold',
    },
});
