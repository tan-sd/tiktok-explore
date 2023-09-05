import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View , TouchableOpacity} from "react-native";

export default function HomePage() {
    return (
    <View style={styles.container}>
            
      <View style={styles.topProfile}>
        <Text>Dropdown here</Text>
        {/* <Icon></Icon> */}
        <Text>@accountname</Text>
        <Text>Followers</Text>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={[styles.button, {marginRight:10}]}
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
        <Text>Section 1 Content</Text>
      </View>

      <View style={styles.bottomProfile}>
       
        <Text>Section 2 Content</Text>
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
        flex: 1, 
        width: "100%",
        backgroundColor: 'lightblue', 
        justifyContent: 'center', 
        alignItems: 'center', 
      },
      bottomProfile: {
        flex: 1, 
        width: "100%",
        backgroundColor: 'lightgreen', 
        justifyContent: 'center', 
        alignItems: 'center', 
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      button: {
        backgroundColor: 'grey', 
        padding: 10, 
        borderRadius: 5, 
      },
      buttonText: {
        color: 'white', 
        fontWeight: 'bold', 
      },
});