import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { translateText } from "../services/translationService";
import { styles } from "./styles";
import logo from "@/src/assets/logo.png"

// Definindo os idiomas com `as const` para criar tipos literais
const languages = {
  "en-GB": "Inglês",
  "es-ES": "Espanhol",
  "it-IT": "Italiano",
  "ja-JP": "Japonês",
  "pt-BR": "Português",
} as const;

// Tipagem para as chaves do objeto `languages`
type LanguageCode = keyof typeof languages;

// Definindo a interface para os props do LanguagePicker
interface LanguagePickerProps {
  selectedLanguage: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
}

export default function Translator() {
  const [textFrom, setTextFrom] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [languageFrom, setLanguageFrom] = useState<LanguageCode>("pt-BR");
  const [languageTo, setLanguageTo] = useState<LanguageCode>("en-GB");

  const handleTranslate = () => {
    if (!textFrom) {
      Alert.alert("Erro", "Por favor, insira algum texto para traduzir.");
      return;
    }

    translateText(textFrom, languageFrom, languageTo)
      .then((result) => setTranslatedText(result))
      .catch(() => Alert.alert("Erro", "Não foi possível traduzir o texto."));
  };

  return (
    <View style={styles.container}>

      <Image style={styles.deus} source={logo} />
      <Text style={styles.title}>TRADUTOR</Text>

      {/* Seletor de Idiomas */}
      <View style={styles.pickerContainer}>
        <LanguagePicker
          selectedLanguage={languageFrom}
          onLanguageChange={setLanguageFrom}
          title="Idioma de Origem"
        />
        <LanguagePicker
          selectedLanguage={languageTo}
          onLanguageChange={setLanguageTo}
          title="Idioma de Destino"
        />
      </View>

      {/* Área de Texto */}
      <TextInput
        style={styles.textArea}
        placeholder="Digite o texto"
        multiline
        numberOfLines={4}
        onChangeText={setTextFrom}
        value={textFrom}
      />
      <TextInput
        style={styles.textArea2}
        placeholder="Tradução"
        multiline
        numberOfLines={4}
        value={translatedText}
        editable={false}
      />
      <TranslateButton onPress={handleTranslate} />
    </View>
  );
}

const LanguagePicker: React.FC<LanguagePickerProps & { title: string }> = ({
  selectedLanguage,
  onLanguageChange,
  title,
}) => {
  const [showList, setShowList] = useState(false);

  const renderItem = ({ item }: { item: LanguageCode }) => (
    <TouchableOpacity
      style={[
        styles.languageItem,
        selectedLanguage === item && styles.selectedLanguageItem,
      ]}
      onPress={() => {
        onLanguageChange(item);
        setShowList(false);
      }}
    >
      <Text style={styles.languageText}>{languages[item]}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.languagePickerContainer}>
      <Text style={styles.pickerTitle}>{title}</Text>
      <TouchableOpacity
        style={styles.selectedLanguage}
        onPress={() => setShowList(!showList)}
      >
        <Text style={styles.languageText}>{languages[selectedLanguage]}</Text>
      </TouchableOpacity>

      {showList && (
        <FlatList
          data={Object.keys(languages) as LanguageCode[]}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          style={styles.languageList}
        />
      )}
    </View>
  );
};

const TranslateButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (

    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>TRADUZIR</Text>
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: "center",
//     marginTop: 150,
//     marginBottom: 20,
//   },
//   pickerContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   languagePickerContainer: {
//     flex: 1,
//     marginBottom: 20,
//   },
//   pickerTitle: {
//     fontSize: 18,
//     marginBottom: 5,
//   },
//   selectedLanguage: {
//     borderColor: "#ccc",
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: "#f9f9f9",
//   },
//   languageList: {
//     maxHeight: 150,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     backgroundColor: "#fff",
//     marginTop: 5,
//     zIndex: 1,
//   },
//   languageItem: {
//     padding: 10,
//   },
//   selectedLanguageItem: {
//     backgroundColor: "#e0e0e0",
//   },
//   languageText: {
//     fontSize: 16,
//   },
//   textArea: {
//     borderColor: "#ccc",
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 20,
//     textAlignVertical: "top",
//   },
//   textArea2: {
//     borderColor: "#ccc",
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 20,
//   },
//   btn: {
//     backgroundColor: "#007BFF",
//     padding: 10,
//     alignItems: "center",
//     borderRadius: 20,
//     width:200,
//     marginLeft:60
//   },
//   btnText: {
//     color: "#FFF",
//     fontSize: 16,
//     alignContent:"center",
//     justifyContent:"center",
//   },
// });
