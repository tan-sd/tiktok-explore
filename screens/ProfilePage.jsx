import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import React, { useState } from "react";
import Videos from "../Components/Videos";

export default function ProfilePage({ navigation }) {
    const [selectedUser, setSelectedUser] = useState("Adam Tan");
    const [accountName, setAccountName] = useState("dancerAdam");
    const [activeTab, setActiveTab] = useState("Tab1");

    const userToAccountMap = {
        "Adam Tan": "dancerAdam",
        Rachel: "singerRach",
        "Seth Yap": "drummerSeth",
        "Sheng Da": "guitarCaleb",
        "Jun Sui": "dancerJun",
    };

    const handleSelectUser = (index, value) => {
        setSelectedUser(value);
        const correspondingAccountName = userToAccountMap[value];
        setAccountName(correspondingAccountName);
    };

    // Define the content for each tab
    const tabContent = {
        Tab1: "Videos",
        Tab2: "Private Videos",
        Tab3: "Collections",
        Tab4: "Heart shape",
    };

    // Function to switch between tabs
    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topProfile}>
                <ModalDropdown
                    options={[
                        "Adam Tan",
                        "Rachel",
                        "Seth Yap",
                        "Sheng Da",
                        "Jun Sui",
                    ]}
                    dropdownTextStyle={styles.dropdownOptionText}
                    dropdownStyle={styles.dropdownContainer}
                    onSelect={(index, value) => {
                        setSelectedUser(value);
                        const correspondingAccountName =
                            userToAccountMap[value];
                        setAccountName(correspondingAccountName);
                    }}
                    dropdownPosition="top"
                >
                    <Text style={styles.dropdownButtonText}>
                        {selectedUser ? selectedUser : "Adam Tan"}
                    </Text>
                </ModalDropdown>

                {/* <Icon></Icon> */}
                <Text>@ {accountName ? accountName : "dancerAdam"}</Text>
                <View style={styles.followingContainer}>
                    <View style={styles.section}>
                        <Text>50</Text>
                        <Text>Following</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>50</Text>
                        <Text>Followers</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>50</Text>
                        <Text>Likes</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, { marginRight: 10 }]}
                        onPress={() => {
                            // Handle the press of Button 1
                        }}
                    >
                        <Text style={styles.buttonText}> Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            // Handle the press of Button 2
                        }}
                    >
                        <Text style={styles.buttonText}>Add Friends</Text>
                    </TouchableOpacity>
                </View>

                {/* bio part */}
                <TouchableOpacity
                    style={[styles.buttonBio, { marginTop: 10 }]}
                    onPress={() => {}}
                >
                    <Text style={[styles.buttonText, { fontSize: 10 }]}>
                        Add Bio
                    </Text>
                </TouchableOpacity>

                {/* Row of tabs */}
                <View style={styles.tabRow}>
                    <TouchableOpacity
                        style={[
                            styles.tabButton,
                            activeTab === "Tab1" && styles.activeTab,
                        ]}
                        onPress={() => switchTab("Tab1")}
                    >
                        <Text>aaaa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.tabButton,
                            activeTab === "Tab2" && styles.activeTab,
                        ]}
                        onPress={() => switchTab("Tab2")}
                    >
                        <Text>Tab 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.tabButton,
                            activeTab === "Tab3" && styles.activeTab,
                        ]}
                        onPress={() => switchTab("Tab3")}
                    >
                        <Text>Tab 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.tabButton,
                            activeTab === "Tab4" && styles.activeTab,
                        ]}
                        onPress={() => navigation.navigate("GlobePage")}
                    >
                        <Text>Tab 4</Text>
                    </TouchableOpacity>
                </View>

                {/* Content based on active tab */}
                <View style={styles.tabContent}>
                    {/* Idk how to make this load conditionally based on tab clicked: tabContent[activeTab] */}
                    <ScrollView style={styles.tabContentScroll}>
                        <Videos numberOfVids={40} />
                    </ScrollView>
                </View>
            </View>

            <StatusBar style="auto" />
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
    topProfile: {
        flex: 2,
        width: "100%",
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
    },
    button: {
        backgroundColor: "grey",
        padding: 10,
        borderRadius: 5,
    },
    buttonBio: {
        backgroundColor: "grey",
        padding: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    dropdownButtonText: {
        fontSize: 16,
        padding: 10,
    },
    dropdownOptionText: {
        fontSize: 16,
        padding: 10,
    },
    dropdownContainer: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        backgroundColor: "white",
    },
    followingContainer: {
        flexDirection: "row",
        justifyContent: "center",
        width: "60%",
    },
    section: {
        flex: 1,
        alignItems: "center",
    },
    tabRow: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 0,
    },
    tabButton: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "gray",
    },
    activeTab: {
        backgroundColor: "lightblue",
    },
    tabContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    tabContentScroll: {
        width: "100%",
    },

    // bottom section
    bottomProfile: {
        flex: 0.5,
        width: "100%",
        backgroundColor: "lightgreen",
        justifyContent: "center",
        alignItems: "center",
    },
});
