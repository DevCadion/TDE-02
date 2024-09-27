import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Translator from "@/src/components/Translator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Translator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});