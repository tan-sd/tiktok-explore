import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./screens/HomePage";
import ShopPage from "./screens/ShopPage";
import InboxPage from "./screens/InboxPage";
import ProfilePage from "./screens/ProfilePage";
import GlobePage from "./screens/GlobePage";
import IndvPost from "./Components/IndvPost";
import Videos from "./Components/Videos";
import Collections from "./Components/Collections";
import IndvCollection from "./Components/IndvCollection";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Define a simple placeholder component
function PlaceholderTab() {
    return null; // This component does nothing
}

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "black",
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Shop") {
                        iconName = focused ? "basket" : "basket-outline";
                    } else if (route.name === "Inbox") {
                        iconName = focused ? "chatbox" : "chatbox-outline";
                    } else if (route.name === "Profile") {
                        iconName = focused ? "person" : "person-outline";
                    } else if (route.name === "Add") {
                        return (
                            <View style={styles.container}>
                                <View
                                    style={[
                                        styles.blueRectangle,
                                        { backgroundColor: "cyan" },
                                    ]}
                                />
                                <View
                                    style={[
                                        styles.redRectangle,
                                        { backgroundColor: "red" },
                                    ]}
                                />
                                <View
                                    style={[
                                        styles.whiteRectangle,
                                        { backgroundColor: "white" },
                                    ]}
                                />
                                <Ionicons
                                    name="ios-add-sharp"
                                    size={24}
                                    color="black"
                                />
                            </View>
                        );
                    }

                    // You can customize the size and color of the icons here
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
                tabBarActiveTintColor: "white", // Change active icon and text color to red
                tabBarInactiveTintColor: "#b5b5b5", //
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Shop"
                component={ShopPage}
                options={{
                    headerShown: false,
                }}
                listeners={{
                    tabPress: (e) => {
                        // Prevent default action
                        e.preventDefault();
                    },
                }}
            />
            <Tab.Screen
                name="Add"
                component={PlaceholderTab}
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                }}
                listeners={{
                    tabPress: (e) => {
                        // Prevent default action
                        e.preventDefault();
                    },
                }}
            />
            <Tab.Screen
                name="Inbox"
                component={InboxPage}
                options={{
                    headerShown: false,
                }}
                listeners={{
                    tabPress: (e) => {
                        // Prevent default action
                        e.preventDefault();
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfilePage}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Tab"
                        component={TabNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="GlobePage"
                        component={GlobePage}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ProfilePage"
                        component={ProfilePage}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="IndvPost"
                        component={IndvPost}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="IndvCollection"
                        component={IndvCollection}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 13,
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    redRectangle: {
        position: "absolute",
        width: 40,
        height: 40,
        left: 10,
        borderRadius: 10,
    },
    blueRectangle: {
        position: "absolute",
        width: 40,
        height: 40,
        right: 10,
        borderRadius: 10,
    },
    whiteRectangle: {
        position: "absolute",
        width: 40,
        height: 40,
        borderRadius: 10,
    },
});
