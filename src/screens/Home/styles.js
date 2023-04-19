import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        // fontFamily:'',
        padding: 0,
        margin: 0,
        width: '100%',
        height: '100%',
    },
    user:{
        paddingLeft: 40,
        paddingTop: 90,
        fontSize: 30,
        color: '#2B4061',
        fontWeight:"bold"
    },
    card:{
        backgroundColor: '#DADADA',
        width: '80%',
        left: '10%',
        top: "20%",
        display: "flex",
        alignItems: 'center',
        borderRadius: 10,
        elevation: 20
        
    },
    titleCard:{
        padding: 5,
        paddingTop: 35,
        fontSize: 28,
        color: '#2B4061',
        fontWeight:"bold"
    },
    contentCard:{
        padding: 10,
        fontSize: 20,
        color: '#2B4061',
    },
    buttom:{
        padding: 10,
        paddingBottom: 30,
        fontSize: 20,
        color: '#2B4061',
    },
})

export default styles