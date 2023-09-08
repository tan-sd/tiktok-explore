import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import Videos from "./Videos";

export default function IndvCollection(props) {
    const route = useRoute();

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        to_return = Math.floor(Math.random() * (max - min)) + min;
        return to_return;
    }

    // Get width for images
    const screenWidth = Dimensions.get("window").width;
    const numColumns = 2;
    const marginSize = 20;
    const spacingSize = 5;
    const imageWidth =
        (screenWidth - 2 * marginSize - spacingSize) / numColumns;

    numOfVideos = getRandomInt(5, 40);

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
                <View style={styles.rightIcons}>
                    <Feather name="more-horizontal" size={35} color="#eaeaea" />
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
                <Text style={styles.videoText}>{numOfVideos} Videos</Text>
            </View>
            <View style={styles.buttonsContainer}>
                {/* button 1 */}
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => {
                        // Handle button 1 press
                    }}
                >
                    <Feather
                        name="settings"
                        size={20}
                        color="black"
                        style={styles.settingsIcon}
                    />
                    <Text style={styles.buttonText1}>Manage Videos</Text>
                </TouchableOpacity>
                {/* button2 */}
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => {
                        props.navigation.navigate("GlobePage", {
                            collectionName: props.route.params.collectionName,
                        });
                    }}
                >
                    <Feather
                        name="map"
                        size={20}
                        color="white"
                        style={styles.settingsIcon}
                    />
                    <Text style={styles.buttonText2}>View in Maps</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabContent}>
                <ScrollView style={styles.tabContentScroll}>
                    <Videos
                        numberOfVids={numOfVideos}
                        navigation={props.navigation}
                    />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        // alignItems: "center",
        // justifyContent: "center",
    },
    collectionTopBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: 'center',
        width: "100%",
        marginTop: 50,
        height: 50,
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
    rightIcons: {
        flexDirection: "row",
        marginTop: 10,
        // alignItems: 'center',
    },
    settingsIcon: {
        marginRight: 5,
    },
    video: {
        marginLeft: 30,
    },
    videoText: {
        color: "#6f6f6f",
    },
    buttonsContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginLeft: 30,
        marginTop: 10,
    },
    button1: {
        flexDirection: "row",
        backgroundColor: "#eaeaea",
        padding: 10,
        borderRadius: 5,
        fontWeight: "bold",
        alignItems: "center",
    },
    button2: {
        flexDirection: "row",
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#FE2C55",
        alignItems: "center",
    },
    buttonText1: {
        fontWeight: "bold",
    },
    buttonText2: {
        color: "white",
        fontWeight: "bold",
    },
    tabContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 10,
    },
    tabContentScroll: {
        width: "100%",
    },
});
