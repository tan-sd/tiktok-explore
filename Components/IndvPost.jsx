import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { MaterialIcons, AntDesign, Foundation, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import profilePic from "../assets/profile-pic.jpeg";
import { useRoute, useNavigation } from '@react-navigation/native';

export default function IndvPost(props) {
    const route = useRoute();
    var imgId
    var isShowBack

    if (route.params) {
        imgId = route.params.imgId;
        isShowBack = route.params.showBack;
    } else {
        imgId = props.imgId;
        isShowBack = props.showBack;
    }

    const navigation = useNavigation();

    const handleGoBack = () => {
      navigation.goBack();
    };

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        to_return = Math.floor(Math.random() * (max - min)) + min
        return to_return;
    }
    
    return (
        <ImageBackground src={`https://picsum.photos/id/${imgId}/600/800`} style={styles.vidbg}>
            {/* For Home Page */}
            {!isShowBack && (
                <View style={styles.topBar}>
                    <View>
                        <MaterialIcons name="live-tv" size={24} color="white" style={styles.topBarIcon} />
                    </View>
                    <View style={styles.topBarMidPart}>
                        <Text style={styles.midPartText}>Friends</Text>
                        <Text style={styles.midPartText}>Following</Text>
                        <Text style={[styles.midPartText, styles.midPartTextSelected]} >For You</Text>
                    </View>
                    <View>
                        <AntDesign name="search1" size={24} color="white" style={styles.topBarIcon} />
                    </View>
                </View>
            )}

            {/* For Profile Page */}
            {isShowBack && (
                <View style={styles.topBar}>
                    <View>
                        <MaterialIcons name="arrow-back" size={24} color="white" style={styles.topBarIcon} onPress={handleGoBack} />
                    </View>
                    <View style={styles.searchBar}>
                            <Text style={styles.searchText}><Ionicons name="search" size={17} color="white" /> butter on a pop tart</Text>
                            <Text style={styles.searchText}>Search</Text>
                    </View>
                </View>
            )}

            <View style={styles.rightBar}>
                <Image source={profilePic} style={[styles.profilePic, styles.rightBarIcons]} />

                <View style={styles.rightBarIcons}>
                    <Foundation name="heart" size={35} color="white" />
                    <Text style={styles.rightBarText}>{getRandomInt(100,999)}K</Text>
                </View>

                <View style={styles.rightBarIcons}>
                    <Ionicons name="chatbubble-ellipses" size={32} color="white" />
                    <Text style={styles.rightBarText}>{getRandomInt(100,999)}</Text>
                </View>

                <View style={styles.rightBarIcons}>
                    <FontAwesome name="bookmark" size={32} color="white" />
                    <Text style={styles.rightBarText}>{getRandomInt(1,99)}K</Text>
                </View>

                <View style={styles.rightBarIcons}>
                    <FontAwesome5 name="share" size={30} color="white" />
                    <Text style={styles.rightBarText}>{getRandomInt(1,99)}K</Text>
                </View>

                <Image source={profilePic} style={[styles.profileSound, styles.rightBarIcons]} />
            </View>

            <View style={styles.bottomBar}>
                <Text style={styles.bottomBarHeader}>Wowww Cool Video Huh?</Text>
                <Text style={styles.bottomBarText}>This video is so damn cool that I gurantee 100% you're gonna sht your p... <Text style={{fontWeight: 'bold'}}>See more</Text></Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    vidbg: {
        minWidth: '100%',
        minHeight: '100%',
    },

    // TOPBAR ===================================
    topBar: {
        marginTop: 50,
        minHeight: 50,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    topBarIcon: {
        paddingLeft: 12,
        paddingRight: 12,
    },
    topBarMidPart: {
        display: 'flex',
        flexDirection: 'row',
    },
    midPartText: {
        paddingLeft: 6,
        paddingRight: 6,
        color: '#e6e6e6',
        fontSize: 15,
    },
    midPartTextSelected: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: 'white',
    },
    searchBar: {
        flexBasis: 1,
        flexGrow: 1,
        margin: 10,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#c7c7c7',
    },
    searchText: {
        color: 'white',
        fontSize: 17,
        margin: 6,
        marginLeft: 12,
        marginRight: 12,
    },

    // RIGHTBAR ===================================
    rightBar: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 85,
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 5,
    },
    rightBarIcons: {
        margin: 7,
    },
    rightBarText: {
        color: 'white',
        textAlign: 'center',
    },
    profilePic: {
        backgroundColor: "#eaeaea",
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    profileSound: {
        backgroundColor: "#eaeaea",
        height: 40,
        width: 40,
        borderRadius: 50,
        borderColor: '#1a1a1a',
        borderWidth: 8,
    },

    // BOTTOMBAR ===================================
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 85,
        paddingLeft: 10,
        paddingBottom: 15,
    },
    bottomBarHeader: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bottomBarText: {
        color: 'white',
    }
});