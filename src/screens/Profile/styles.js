
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        bottom: 120,
    },
    imageProfile:{
        borderRadius: 100,
        width: 120,
        height: 120,
        top:200,
        left:25,
    },
    editImage:{
        backgroundColor: '#DADADA',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 50,
        height: 50,
        top: 170,
        left: 100,
    },
    nomeUser: {
        marginTop: 230,
        paddingLeft: 40,
        fontSize: 30,
        color: '#2B4061',
        fontWeight:"bold"
    },
    date:{
        paddingLeft: 40,
        fontSize: 20,
        color: 'black',
    },
    city:{
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
        borderRadius: 30,
        alignItems: 'center',
        width: '80%',
        marginLeft: 40,
        marginTop: 40,
        elevation: 20
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
    imcText:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    imcHistorico:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 40,
    },
    imcHistoricoTitle:{
        color: '#2B4061',
        fontSize: 25,
        marginBottom: 40,
        fontWeight: 'bold'
    },
    imcHistoricoDescription:{
        marginTop: 20,
        color: '#2B4061',
        fontSize: 16
    }

})

export default styles