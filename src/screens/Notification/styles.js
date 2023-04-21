import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        padding: 0 ,
        paddingHorizontal: 40

    },
    title:{
        color: '#2B4061',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 80,
    },
    backgroundNoti:{
        backgroundColor: '#DADADA',
        borderRadius: 30,
        elevation: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',

    },
    content:{
        marginLeft: 12,
    },
    icon:{
        backgroundColor: '#D5AF36',
        borderRadius:50,
        justifyContent: 'center',
        alignItems:'center',
        // marginTop:,
        width: 50,
        height:50 
        },
    titleMenssage:{
        fontSize: 20,
        color: '#2B4061',
        marginBottom: 10
        
    },
    desciption:{
        color: '#2B4061',
    }

})

export default styles