import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height: "auto",
        flex: 1,
        backgroundColor: '#2B4061',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImg:{
        marginBottom: 170,
        width: 414, 
        height: 885,
        flex: 2
    },
    logo: {
        marginBottom: 10,
        right: 10,   
    },
    titleLogin:{
        color: "#2B4061",
        fontSize: 28,
        fontWeight: "bold",
        paddingBottom: 15,
        paddingTop: 15,
    },
    input:{
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 18,
        borderColor: "#2B4061",
    },
    textInput: {
        fontSize: 22,
        paddingBottom: 8,
        paddingTop: 8,
        color: "#2B4061",
        fontWeight: "bold",
    },
    content:{
        justifyContent: "center",
        alignContent :"center",
        paddingLeft: 60,
        // backgroundColor: "#ef2522",
        width:"100%",
        marginBottom: 250,
    },
    backgroundButtonLogin: {
        height: 50,
        width: 140,
        marginTop: 15,
        borderRadius: 10,
        alignItems:  "center",
        justifyContent: "center",
        backgroundColor: "#D5AF36",
    },
    buttonLogin: {
        alignItems:"flex-end",
        paddingRight: 70,
        paddingBottom: 20,
        
    },
    textButton: {   
        color: "#2B4061",
        fontSize: 22
    }
    
    
})

export default styles