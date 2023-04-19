import React from "react";
import { View, Text, TextInput, ImageBackground, Image, TouchableOpacity, SafeAreaView, StatusBar } from "react-native"
import styles from "./styles"

export function Profile() {
    return (
        <View>
            <View>
                <Text>foto do usuario</Text>
                <Text>nome do usuario</Text>
            </View>
            <View>
                <Text>data de nascimento</Text>
                <Text>cidade natal</Text>
            </View>
            <View>
                <Text>calculadora de IMC</Text>
            </View>
            <View>
                <Text>historico de IMC</Text>
                <Text>imagem</Text>
            </View>
        </View>
    );
}