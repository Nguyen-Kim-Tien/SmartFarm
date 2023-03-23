import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import {
  Accelerometer,
  Barometer,
  Gyroscope,
  Magnetometer,
} from "react-native-sensors";

export default function SensorData() {
  const [temperature, setTemperature] = useState(0);
  const [soilMoisture, setSoilMoisture] = useState(0);
  const [airHumidity, setAirHumidity] = useState(0);
  const [lightIntensity, setLightIntensity] = useState(0);

  useEffect(() => {
    const temperatureSubscription = new Gyroscope({
      updateInterval: 1000,
    }).subscribe(({ x, y, z }) => {
      setTemperature(Math.sqrt(x * x + y * y + z * z));
    });
    const soilMoistureSubscription = new Barometer({
      updateInterval: 1000,
    }).subscribe(({ pressure }) => {
      setSoilMoisture(pressure);
    });
    const airHumiditySubscription = new Magnetometer({
      updateInterval: 1000,
    }).subscribe(({ x, y, z }) => {
      setAirHumidity(Math.sqrt(x * x + y * y + z * z));
    });
    const lightIntensitySubscription = new Accelerometer({
      updateInterval: 1000,
    }).subscribe(({ x, y, z }) => {
      setLightIntensity(Math.sqrt(x * x + y * y + z * z));
    });
    return () => {
      temperatureSubscription.unsubscribe();
      soilMoistureSubscription.unsubscribe();
      airHumiditySubscription.unsubscribe();
      lightIntensitySubscription.unsubscribe();
    };
  }, []);

  const data = {
    labels: ["Temperature", "Soil Moisture", "Air Humidity", "Light Intensity"],
    datasets: [
      {
        data: [temperature, soilMoisture, airHumidity, lightIntensity],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensor Data</Text>
      <LineChart
        data={data}
        width={400}
        height={300}
        yAxisSuffix="%"
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
