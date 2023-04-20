import React from "react"
import { View, Text, } from "react-native"
import  CheckBox  from "../../components/CheckBox"



import styles from "./styles"

export function Procedure() {
    const optionsProc = [
        {text: 'exame 1', id: 1}]

    return (
        <View>
            <View>
                <Text
                    style = {styles.title}
                    >
                        Procedimentos
                </Text>
                <Text
                style = {styles.info}
                >
                    Selecione os procedimentos para criar sua check-list semanal
                </Text>
            </View>
            <View 
            style={styles.card}
            >
                <View>
                    <Text
                    style={styles.titleCard}
                    >
                        Entregas para esta semana 
                    </Text>
                    <View>
                        <CheckBox options={optionsProc} onChange={(op)=> alert(op)} />
                        <CheckBox options={optionsProc} onChange={(op)=> alert(op)} />
                        <CheckBox options={optionsProc} onChange={(op)=> alert(op)} />
                        <CheckBox options={optionsProc} onChange={(op)=> alert(op)} />
                        <CheckBox options={optionsProc} onChange={(op)=> alert(op)} />
                        <CheckBox options={optionsProc} onChange={(op)=> alert(op)} />
                    </View>
                    <View>
                        <Text 
                        style={styles.description}>
                        Selecione a caixinha caso ja tenha feito o procediemtno para informar a clínica</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}