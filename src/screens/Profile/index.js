import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native"
import styles from "./styles"

import { Ionicons } from '@expo/vector-icons';

export function Profile() {
    return (
        <View style={styles.container}>
            <View>
                <Image 
                style={styles.imageProfile}
                source={require('../../assets/images/user.png')}
                />
                <View style={styles.editImage}>
                    <Text><Ionicons name="camera" size={30} color="black" /></Text>
                </View>
            </View>
            <View>
                <Text style={styles.nomeUser}>Nalberth</Text>
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
                    <Text style={styles.imcTitle}>Calcule seu IMC</Text>
                    <Text style={styles.imcText}>Calcule seu Indice de Massa Corporal semanamente e ganhe pontos</Text>
                </View>
            </View>
            <View style={styles.imcHistorico}>
                <Text style={styles.imcHistoricoTitle}>Histórico de IMC</Text>
                <Image source={require('../../assets/images/notFound.png')}/>
                <Text style={styles.imcHistoricoDescription}>Nenhum histórico encontrado</Text>
            </View>
        </View>
    );
}