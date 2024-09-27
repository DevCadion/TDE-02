import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignContent:"center",
      alignItems:'center',
      marginTop:20,
      backgroundColor:"#0000"
    },
    title: {
      fontSize: 24,
      textAlign: "center",
      marginTop: 20,
      marginBottom: 20,
    },
    pickerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    languagePickerContainer: {
      flex: 1,
      marginBottom: 20,
    },
    pickerTitle: {
      fontSize: 15,
      marginBottom: 5,
      left:15,
    
    },
    selectedLanguage: {
      borderColor: "#ccc",
      borderWidth: 1,
      padding: 10,
      borderRadius: 20,
      backgroundColor: "#f9f9f9",
    },
    languageList: {
      maxHeight: 150,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      backgroundColor: "#fff",
      marginTop: 5,
      zIndex: 1,
    },
    languageItem: {
      padding: 10,
    },
    selectedLanguageItem: {
      backgroundColor: "#e0e0e0",
    },
    languageText: {
      fontSize: 16,
    },
    textArea: {
      borderColor: "#ccc",
      borderWidth: 1,
      padding: 10,
      marginBottom: 20,
      width:300,
      textAlignVertical: "top",
      borderRadius:24,
    },
    textArea2: {
      borderColor: "#ccc",
      borderWidth: 1,
      padding: 10,
      width:300,
      marginBottom: 20,
      borderRadius:24,
    },
    btn: {
      backgroundColor: "#708090",
      padding: 10,
      alignItems: "center",
      borderRadius: 25,
      width:200,
      height:50
    },
    btnText: {
      color: "#FFF",
      fontSize: 16,
      marginTop:7,
      alignContent:"center",
      justifyContent:"center",
    },
    deus:{
        alignContent:"center",
        justifyContent:"center"
    }
  });
  