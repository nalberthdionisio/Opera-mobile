import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export function Notification() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Avisos</Text>
            </View>
            <View style={styles.backgroundNoti}>
                <View style={styles.icon}>
                    <Ionicons name="clipboard-outline" size={30} color={'#2B4061'} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.titleMenssage}>Exame de sangue</Text>
                    <Text style={styles.desciption}>Descrição</Text>
                </View>
            </View>
        </View>
    );
}
