import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Millions of Songs</Text>
      <Text style={styles.subtitle}>Free in MeloxyMix</Text>

      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={() => navigation.navigate("UserSignup")}
      >
        <Text style={styles.buttonText}>Sign Up Free</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </TouchableOpacity>

    
      <Text style={styles.loginText}>Log in</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 32,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 20,
  },
  button: {
    width: "80%",
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: "#1DB954",
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 24,
  },
});
