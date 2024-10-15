import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { COLORS } from "../../utils/colors";

export default function Signin() {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{ fontSize: 32, fontWeight: "700", color: COLORS.textBlack }}
        >
          Hello,
        </Text>
        <Text style={{ color: COLORS.textPrimary, fontSize: 20 }}>
          Welcome Back
        </Text>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry={true}
          />
        </View>
        <Text style={{ color: COLORS.textSecondary, fontSize: 13 }}>
          Forgot Password?
        </Text>
        <Pressable style={styles.btn}>
          <Text style={{ color: "white", fontSize: 18 }}>Sign in</Text>
          <Icon
            name="arrow-forward-outline"
            color="#fff"
            size={20}
            style={{ marginLeft: 28 }}
          />
        </Pressable>
        <Text style={{ textAlign: "center", marginTop: 16, color: "#D9D9D9" }}>
          {" "}
          Or Sign in With{" "}
        </Text>
        <View
          style={{
            marginTop: 16,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Pressable style={styles.iconBtn}>
            <Icon name="logo-google" size={30} color={COLORS.primary} />
          </Pressable>
          <Pressable style={styles.iconBtn}>
            <Icon name="logo-facebook" size={32} color={COLORS.primary} />
          </Pressable>
        </View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 28,
            fontSize: 13,
          }}
        >
          Don't have an account?
          <Text style={{ color: COLORS.textSecondary }}> Sign up</Text>
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
  },
  input: {
    marginTop: 4,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderColor: "#D9D9D9",
  },
  btn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconBtn: {
    paddingVertical: 4,
    marginTop: 0,
    backgroundColor: "transparent",
    borderWidth: 2,
    padding: 4,
    borderRadius: 10,
    borderColor: "#D9D9D9",
  },
});
