import { useEffect, useState } from "react"
import { View, Text,FlatList } from "react-native"

import {api} from '../../Services/api'
import { CheckBox } from '../../components/CheckBox'


import styles from "./styles"


    
    
    export function Procedure() {
    const [data, setData] = useState([])
    const [checked, setChecked] = useState(false)
        

    async function fetchApi() {
        const { data } = await api.get('/posts', {
            params: {
                _limit: 5
            }
        })
        setData(data)
    }

    useEffect(() => {
        fetchApi()
    }, [])


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
                    style={styles.titleCard}>Entregas para esta semana </Text>
                    <View>
                       
                        <FlatList
                        data={data}
                        style={styles.checkbox}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => (
                            <CheckBox 
                                label={item.title}
                                onPress={() => setChecked(!checked)}
                                checked={checked}
                            />
                        )}/> 


                        
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