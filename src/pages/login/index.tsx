import React from "react";
import { Text, 
    View,
    Image,
    TextInput,
    Alert,
    Button, 
    TouchableOpacity} from "react-native";
import { styles } from "./styles";
import logo from "@/src/assets/logo.png"
import { useState } from "react";
import { buscarEnderecoPorCEP } from "@/src/api/api"; // Função para buscar o endereço a partir do CEP



export function Page() {
  const [cep, setCep] = useState("");

  const handlePress = () => {
    if (cep.length !== 8 || isNaN(Number(cep))) {
      Alert.alert("Erro", "Por favor, insira um CEP válido com 8 dígitos.");
      return;
    }

    buscarEnderecoPorCEP(cep)
      .then((dados) => {
        if (dados.erro) {
          Alert.alert("Erro", "CEP não encontrado!");
        } else {
          Alert.alert(
            "Endereço",
            `Rua: ${dados.logradouro}\nBairro: ${dados.bairro}\nCidade: ${dados.localidade}`
          );
        }
      })
      .catch(() => {
        Alert.alert("Erro", "Não foi possível buscar o endereço. Tente novamente.");
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxtop}>
        <Image style={styles.deus} source={logo} />
        <Text style={styles.txttop}>Bem vindo de volta</Text>
      </View>

      <View style={styles.boxmid}>
        <Text style={styles.txtimpp}>Escreva seu CEP: Somente Números</Text>
        <TextInput
          style={styles.impt}
          //keyboardType="numeric"
          value={cep}
          onChangeText={setCep}
          maxLength={8} // Limita o input a 8 caracteres
        />
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.btt} onPress={handlePress}>
          <Text>Clique e veja sua Rua</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
