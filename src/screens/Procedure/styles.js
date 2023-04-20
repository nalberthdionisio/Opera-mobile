import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    title: {
        paddingLeft: 40,
        paddingTop: 90,
        fontSize: 30,
        color: '#2B4061',
        fontWeight:"bold"
    },
    info:{
        paddingLeft: 40,
        paddingTop: 5,
        fontSize: 20,
        color: '#2B4061',
    },
    card:{
        backgroundColor: '#DADADA',
        width: '80%',
        left: '10%',
        top: "5%",
        display: "flex",
        alignItems: 'center',
        borderRadius: 10,
        elevation: 20, //sombra
        paddingBottom: 20
    },
    titleCard:{
        paddingTop: 30,
        marginRight: 80,
        fontSize: 20,
        color: '#2B4061',
        paddingBottom: 20,

    },
    checkbox:{
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: 80,
        fontSize: 20,
        color: '#2B4061', 
    },
    description:{
        fontSize: 20,
        color: '#2B4061',
    }
})

export default styles