import React, { useState } from "react"
import { Text } from "react-native"
import { Checkbox } from 'react-native-paper';

 
export function CheckBox({label, checked}){
    const [checkedBox, setCheckedBox] = useState(checked);

    function onPress(){
        setCheckedBox(!checkedBox);
    }

    return (
        <>
            <Text>{label}</Text>
            <Checkbox
                status={checkedBox ? 'checked' : 'unchecked'}
                onPress={onPress}
            />
        </>
    )
}

