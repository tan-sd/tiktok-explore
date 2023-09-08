import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Animated,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import foodData from "../utils/foodData.json";
import axios from "axios";
import { useEffect, useState } from "react";
import markerImg from "../assets/marker.png";
import { Feather } from "@expo/vector-icons";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { FontAwesome5 } from "@expo/vector-icons";
// import * as Location from "expo-location";

export default function GlobePage(props) {
    const [foodPlaces, setFoodPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [slideAnim] = useState(new Animated.Value(-300));
    // const [currentLocation, setCurrentLocation] = useState(null);

    const slideUp = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const slideDown = () => {
        Animated.timing(slideAnim, {
            toValue: -300,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

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

    // useEffect(() => {
    //     async function getCurrentUserLocation() {
    //         let { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== "granted") {
    //             console.error("Permission to access location was denied");
    //             return;
    //         }

    //         let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    //         setCurrentLocation(location);
    //     }

    //     getCurrentUserLocation();
    // }, []);

    // useEffect(() => {
    //     // Check if currentLocation has been set and has coords
    //     if (currentLocation && currentLocation.coords) {
    //         console.log(currentLocation);
    //     }
    // }, [currentLocation]);

    return (
        <View style={styles.container}>
            <View style={styles.collectionTopBar}>
                <View style={styles.leftIcons}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.goBack();
                        }}
                    >
                        <Feather
                            name="chevron-left"
                            size={35}
                            color="#eaeaea"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.collectionInfo}>
                <Text style={styles.collectionName}>
                    {props.route.params.collectionName}
                </Text>
                <Feather
                    name="lock"
                    size={25}
                    color="#eaeaea"
                    style={styles.lockIcon}
                />
            </View>
            <View style={styles.video}>
                <Text style={styles.videoText}>{foodPlaces.length} videos</Text>
            </View>
            {/* <View style={styles.title}>
                <Text style={styles.titleText}>
                    {props.route.params.collectionName}
                </Text>
                <Text style={styles.subText}>{foodPlaces.length} videos</Text>
            </View> */}
            <View style={styles.mapContainer}>
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={slideDown}
                    activeOpacity={1}
                >
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
                                onPress={() => {
                                    setSelectedPlace(place);
                                    slideUp();
                                }}
                                key={index}
                                coordinate={{
                                    latitude: place.latitude
                                        ? place.latitude
                                        : 0,
                                    longitude: place.longitude
                                        ? place.longitude
                                        : 0,
                                }}
                            >
                                <FontAwesome5
                                    name="map-marker-alt"
                                    style={styles.marker}
                                    size={35}
                                    color="#EE1C51"
                                />
                                <View style={styles.markerIndexContainer}>
                                    <Text style={styles.markerIndex}>
                                        {index + 1}
                                    </Text>
                                </View>
                            </Marker>
                        ))}

                        {/* {currentLocation && ( */}
                        <Marker
                            coordinate={{
                                // latitude: currentLocation.coords.latitude,
                                // longitude: currentLocation.coords.longitude
                                latitude: 1.296568,
                                longitude: 103.852119,
                            }}
                        >
                            <FontAwesome5
                                name="map-marker-alt"
                                style={styles.marker}
                                size={35}
                                color="#69c8d0"
                            />
                        </Marker>
                        {/* )} */}
                    </MapView>
                </TouchableOpacity>
                <Animated.View
                    style={{ ...styles.slideUpBox, bottom: slideAnim }}
                >
                    {selectedPlace ? (
                        <View style={styles.placeInfoContainer}>
                            <Image style={styles.marker} source={markerImg} />
                            <View style={styles.placeSubInfoContainer}>
                                <Text style={styles.placeName}>
                                    {selectedPlace.name}
                                </Text>
                                <Text style={styles.placeAddress}>
                                    {selectedPlace.address}
                                </Text>
                                <Text style={styles.likedFollowers}>
                                    Seth Yap and 3 other followers liked this
                                </Text>
                                <TouchableOpacity style={styles.messageBtn}>
                                    <Text style={styles.messageText}>
                                        Message
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        <Text>No place selected</Text>
                    )}
                </Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    mapContainer: {
        flex: 1,
        marginTop: "10%",
    },
    collectionTopBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: 'center',
        width: "100%",
        marginTop: 50,
        paddingHorizontal: 20,
    },
    collectionInfo: {
        flexDirection: "row",
        marginTop: 25,
    },
    collectionName: {
        color: "#eaeaea",
        fontSize: 24,
        fontWeight: "bold",
        marginRight: 5,
        marginLeft: 30,
    },
    leftIcons: {
        flexDirection: "row",
        marginLeft: -3,
        marginTop: 10,
        // alignItems: 'center',
    },
    title: {
        top: 100,
        left: 25,
    },
    titleText: {
        fontSize: 19,
        color: "#eaeaea",
        marginBottom: 5,
    },
    video: {
        marginLeft: 30,
    },
    videoText: {
        color: "#6f6f6f",
    },
    marker: {
        width: 130,
        height: 200,
        marginRight: 25,
    },
    markerIndexContainer: {
        backgroundColor: "#ffffff",
        width: 18,
        height: "auto",
        borderRadius: 20,
        position: "absolute",
        left: 4.5,
        top: 5,
    },
    markerIndex: {
        textAlign: "center",
    },
    slideUpBox: {
        position: "absolute",
        height: 300,
        width: "100%",
        backgroundColor: "#121212",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    placeInfoContainer: {
        flexDirection: "row",
        justifyContent: "center",
        top: 25,
    },
    placeSubInfoContainer: {
        width: 210,
    },
    placeName: {
        color: "#eaeaea",
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 5,
    },
    placeAddress: {
        color: "#eaeaea",
        fontSize: 14,
    },
    likedFollowers: {
        // width: 150,
        color: "#eaeaea",
        fontSize: 10,
        marginTop: 40,
        marginBottom: 10,
    },
    messageBtn: {
        // width: 100,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#FE2C55",
        alignItems: "center",
    },
    messageText: {
        color: "#eaeaea",
        fontWeight: "bold",
    },
});
