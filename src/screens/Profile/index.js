import React from "react";
import { View, Text } from "react-native"
import styles from "./styles"

export function Profile() {
    return (
        <View>
            <View>
                <Text>foto</Text>
                <Text style={styles.nomeUser}>nome do usuario</Text>
            </View>
            <View>
                <Text style={styles.date}>D.N: 12/11/1990</Text>
                <Text style={styles.city}>Cidade: Juazeiro do Norte</Text>
            </View>
            <View style={styles.imcCard}>
                <Text style={styles.imc}>calculadora de IMC</Text>
                <Text>historico de IMC</Text>
                <Text>imagem</Text>
            </View>
        </View>
    );
}