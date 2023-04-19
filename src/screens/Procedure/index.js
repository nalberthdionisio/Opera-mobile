import React from "react";
import { View, Text, TextInput, ImageBackground, Image, TouchableOpacity, SafeAreaView, StatusBar } from "react-native"
import styles from "./styles"

export function Procedure() {
    return (
        <View>
            <View>
                <Text>Procedimentos</Text>
            </View>
            <View>
                <Text>Seus Procedimentos serão exibidos aqui, com o nome do exame e a data do exame, onde deverá ser marcado a caixinha quando concluir.</Text>
            </View>
            <View>
                <View>
                    <Text>Exames</Text>
                </View>
            </View>
        </View>
    );
}