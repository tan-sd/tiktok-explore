import { StyleSheet, Text, View, ImageBackground, Dimensions } from "react-native";
import { Feather } from '@expo/vector-icons';

export default function ProfilePage(props) {
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        to_return = Math.floor(Math.random() * (max - min)) + min
        return to_return;
    }

    // Calculate the number of rows required
    const numRows = Math.ceil(props.numberOfVids / 2);

    // Create an array to store the image sources (replace with your image sources)
    const imageSources = Array.from({ length: props.numberOfVids }).map(
        (_, index) => `https://picsum.photos/id/${getRandomInt(1,500)}/300/400`
    );

    // Get width for images
    const screenWidth = Dimensions.get('window').width;
    const numColumns = 2;
    const marginSize = 10; 
    const spacingSize = 5; 
    const imageWidth = (screenWidth - (2 * marginSize) - spacingSize) / numColumns; 


    return (
        <View style={styles.gridContainer}>
        {Array.from({ length: numRows }).map((_, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
            {imageSources.slice(rowIndex * 2, (rowIndex + 1) * 2).map((source, colIndex) => (
            <ImageBackground key={colIndex} source={{ uri: source }} style={{width: imageWidth, aspectRatio: 3/4, marginRight: spacingSize}}>
                <View style={styles.lockBtn}>
                    <Feather name="lock" size={20} color="white" />
                    <Text style={styles.placeholderText}>Collection</Text>
                </View>
            </ImageBackground>
            ))}
        </View>
        ))}
        </View>
    );
}

const styles = StyleSheet.create({
    test: {
        backgroundColor: 'red',
        width: '100%',
    },
    gridContainer: {
        flexDirection: 'column', // Vertical layout
        alignItems: 'center',    // Center horizontally
    },
    row: {
        flexDirection: 'row',    // Horizontal layout
        justifyContent: 'flex-start', // Center items horizontally
        width: '100%',
    },
    lockBtn: {
        position: 'absolute',
        bottom: 10,
        right: 5,
        display: 'flex',
        flexDirection: 'row',
    },
    placeholderText: {
        color: 'white',
        marginLeft: 3,
    }
});