import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import foodData from "../utils/foodData.json";
import axios from "axios";
import { useEffect, useState } from "react";
import markerImg from "../assets/marker.png";
import leftArrowImg from "../assets/left-arrow.png";
import { GOOGLE_MAPS_API_KEY } from "@env";

export default function GlobePage({ navigation }) {
    const [foodPlaces, setFoodPlaces] = useState([]);

    useEffect(() => {
        const geocodePlace = async (place) => {
            try {
                const response = await axios.get(
                    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                        place.address
                    )}&key=${GOOGLE_MAPS_API_KEY}`
                );

                if (
                    response.data.status === "OK" &&
                    response.data.results.length > 0
                ) {
                    const location = response.data.results[0].geometry.location;
                    place.latitude = location.lat;
                    place.longitude = location.lng;
                }
            } catch (error) {
                console.error("Geocoding error:", error);
            }
        };

        const geocodeFoodPlaces = async () => {
            const geocodedPlaces = [];

            for (let i = 0; i < foodData.length; i++) {
                const place = { ...foodData[i] };
                await geocodePlace(place);
                geocodedPlaces.push(place);
            }
            setFoodPlaces(geocodedPlaces);
        };
        geocodeFoodPlaces();
    }, []);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Image style={styles.leftArrow} source={leftArrowImg} />
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Food Paradise 🍔🍱🍡</Text>
            </View>
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 1.30027,
                        longitude: 103.851959,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                >
                    {foodPlaces.map((place, index) => (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: place.latitude,
                                longitude: place.longitude,
                            }}
                        >
                            <Image
                                style={styles.marker}
                                source={markerImg}
                            ></Image>
                            <View style={styles.markerIndexContainer}>
                                <Text style={styles.markerIndex}>{index}</Text>
                            </View>
                        </Marker>
                    ))}
                </MapView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    mapContainer: {
        flex: 1,
        marginTop: "40%",
    },
    header: {
        flexDirection: "row",
    },
    title: {
        top: 100,
        left: 50,
    },
    titleText: {
        fontSize: 19,
    },
    leftArrow: {
        width: 30,
        height: 30,
        top: 65,
        left: 20,
    },
    marker: {
        width: 40,
        height: 40,
    },
    markerIndexContainer: {
        backgroundColor: "#ffffff",
        width: 18,
        height: "auto",
        borderRadius: 20,
        position: "absolute",
        left: 11,
        top: 5,
    },
    markerIndex: {
        textAlign: "center",
    },
});
