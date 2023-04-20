import React, { useState } from "react"
import { View,Text, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles"


const CheckBox = ({options = [], onChange}) => {
    const [ selected, setSelected] = useState([])
    function toggle(id){
    let index = selected.findIndex(i => i === id)
        let arrSelecteds = [...selected]
        if (index != -1){
            arrSelecteds.splice(index, 1);
        }else{
            arrSelecteds.push(id)
        }
        setSelected(arrSelecteds)
    }

    return (
    <View style ={styles.container}>
       {options.map((op, index) =>(
        <View style = {styles.optionContainer}>
            <TouchableOpacity style={styles.touchable} onPress={()=> toggle(op?.id)}>
                {
                    selected.findIndex(i=>i === op.id) != -1 ? <Ionicons name="checkmark" color={'#D5AF36'} size={20}/>:null
                }       
            </TouchableOpacity>
            <Text style={styles.optext}>{op?.text}</Text>
        </View>
       ))} 
    </View>
)
}
export default CheckBox