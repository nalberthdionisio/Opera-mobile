
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    nomeUser: {
        backgroundColor: 'red',
        marginTop: 230,
        paddingLeft: 40,
        fontSize: 30,
        color: '#2B4061',
        fontWeight:"bold"
    },
    date:{
        backgroundColor: 'blue',
        paddingLeft: 40,
        fontSize: 20,
        color: 'black',
    },
    city:{
        backgroundColor: 'yellow',
        paddingLeft: 40,
        fontSize: 20,
        color: 'black',
    },
    imcCard:{
        backgroundColor: 'green',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginLeft: 40,
        marginTop: 40
    },
    imc:{
        marginTop: 50,
        color: '#2B4061',
        fontWeight:"bold",
        fontSize: 20,
    },  
})

export default styles