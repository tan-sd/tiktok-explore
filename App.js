import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./screens/HomePage";
import ShopPage from "./screens/ShopPage";
import InboxPage from "./screens/InboxPage";
import ProfilePage from "./screens/ProfilePage";
import GlobePage from "./screens/GlobePage";
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
                    backgroundColor: 'black'
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
                        iconName = "add"
                    }
            
                    // You can customize the size and color of the icons here
                    return <Ionicons name={iconName} size={size} color={color} />;
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
            />
            <Tab.Screen
                name="Add"
                component={PlaceholderTab}
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                }}
            />
            <Tab.Screen
                name="Inbox"
                component={InboxPage}
                options={{
                    headerShown: false,
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
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
