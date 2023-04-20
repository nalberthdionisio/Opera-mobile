import React from "react";
import { View, Text, Image } from "react-native"
import styles from "./styles"

import { Ionicons } from '@expo/vector-icons';

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
                <View style={styles.backgroundIcon}>
                    <Text><Ionicons name="add" size={30} color="#D5AF36" /></Text>
                </View>
                <View style={styles.imc}>
                    <Text style={styles.imcTitle}>calculadora de IMC</Text>
                    <Text>Calcule seu Indice de Massa Corporal semanamente e ganhe pontos</Text>
                </View>
            </View>
            <View style={styles.imcHistorico}>
                <Text style={styles.imcHistoricoTitle}>Histórico de IMC</Text>
                <Image source={require('../../assets/images/notFound.png')}></Image>
                <Text>Nenhum histórico encontrado</Text>
            </View>
        </View>
    );
}