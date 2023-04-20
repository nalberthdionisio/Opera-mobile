
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
    backgroundIcon:{
        borderRadius: 100,
        backgroundColor: '#2B4061',
        width: 60,
        height: 60,
        justifyContent:'center',
        alignItems:'center',
        right:140,
        bottom: 10,
    },
    imcCard:{
        backgroundColor: '#DADADA',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginLeft: 40,
        marginTop: 40
    },
    imc:{ 
        bottom: 40,
        width: '60%',
    },
    imcTitle:{
        color: '#2B4061',
        marginBottom: 20,
        fontWeight:"bold",
        fontSize: 20,
    }, 
    imcHistorico:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 20,
    },
    imcHistoricoTitle:{
        color: '#2B4061',
        fontSize: 25,
        marginBottom: 40,
    }

})

export default styles