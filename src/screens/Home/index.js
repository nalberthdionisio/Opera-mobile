import React, { Status } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


export function Home() {
    const navigation = useNavigation();
    return (
        <View
        style ={styles.container}
        >
            <View>
                <Text 
                style={styles.user}
                >
                Nome do usuario
                </Text>
            </View>
            <View style={styles.card}>
                <View>
                    <Text 
                    style={styles.titleCard}
                    >
                    Você tem novos exames
                    </Text>
                </View>
                <View>
                    <Text 
                    style={styles.contentCard}
                    >
                    Crie seu primeiro check-list e comece a marcar pontos.
                    </Text>
                </View>
                <View>
                    <Text 
                    style={styles.buttom}
                    >
                    Clique no icone da prancheta, localizado no menu horizontal, para verificar quais exames estão pendentes. 
                    </Text>
                </View>
            </View>
        </View>
    );
}
