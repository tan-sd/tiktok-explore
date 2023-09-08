import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IndvPost from "../Components/IndvPost"

export default function HomePage() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        to_return = Math.floor(Math.random() * (max - min)) + min
        return to_return;
    }

    return (
        <View style={styles.container}>
            <IndvPost imgId={getRandomInt(1,85)} showBack={false} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
