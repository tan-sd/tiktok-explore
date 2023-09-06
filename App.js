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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor:
                        route.name === "Profile" ||
                        route.name === "Shop" ||
                        route.name === "Inbox"
                            ? "#252525"
                            : "#000000",
                },
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
