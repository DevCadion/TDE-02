import React from "react";
import { Text, 
    View,
    Image,
    TextInput } from "react-native";
import { styles } from "./styles";
import logo from "../assets/logo.png"
    


 export function Page (){
    return(
        <View style={styles.container}>
            <View style={styles.boxtop}>
                <Image style={styles.deus}
                source={logo}
                />
                <Text style={styles.txttop}>Bem vindo de volta</Text>

            </View>

            <View style={styles.boxmid}>
                <Text>Endereço de Email...</Text>
                <TextInput>
                    <Text>Escreva seu email</Text>
                </TextInput>

            </View>
            
            <View style={styles.button}>
                <Text>ok</Text>

            </View>
        </View>
    )


 }

