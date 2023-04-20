import React from "react";
import { View, Text, TextInput, ImageBackground, Image, TouchableOpacity, SafeAreaView, StatusBar } from "react-native"
import { useNavigation } from '@react-navigation/native';
import styles from "./styles"

export function Login() {
    const navigation = useNavigation();
    return (
        <View
            style={styles.container}
        >
            <ImageBackground
                style={styles.backgroundImg}
                source={require("../../assets/images/Vector.png")}
            />
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/images/icon.png")}
                />
                <Text style={styles.titleLogin}>Entre</Text>
                <View >
                    <Text style={styles.textInput}>Usuário</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="exemplo@gmail.com"
                        placeholderTextColor="#D5AF36"
                    />
                </View>
                <View>
                    <Text style={styles.textInput}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex. 123456789"
                        placeholderTextColor="#D5AF36"
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonLogin}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={styles.backgroundButtonLogin}>
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}