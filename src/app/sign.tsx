import { ImageBackground } from "expo-image";
import { Link } from "expo-router";
import { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Sign() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://img.magnific.com/premium-photo/abstract-yellow-watercolor-background-with-orange-white-splashes_1106493-523041.jpg?semt=ais_hybrid&w=740&q=80",
        }}
        style={styles.background}
        contentFit="cover"
      >
        <View style={styles.main}>
          <KeyboardAwareScrollView
            enableOnAndroid={true}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            extraScrollHeight={10}
            extraHeight={100}
          >
            {/* IMAGE */}
            <View style={styles.imageContainer}>
              <Image
                source={require("../../Image/images.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            {/* SIGNUP FORM */}
            <View style={styles.signupForm}>
              <Text style={styles.title}>Register</Text>

              <Text style={styles.subtitle}>Please register to login</Text>

              {/* NAME */}
              <Text>Your Full Name</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter Your Full Name"
                value={name}
                onChangeText={setName}
              />

              {/* EMAIL */}
              <Text>Your Email</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter Your Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              {/* PHONE */}
              <Text>Your Phone Number</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter Your Phone Number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />

              {/* PASSWORD */}
              <Text>Create a Password</Text>

              <View style={styles.passwordInput}>
                <TextInput
                  style={styles.passwordText}
                  placeholder="Create a Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!ShowPassword}
                />

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPressIn={(e) => {
                    e.stopPropagation();
                  }}
                  onPress={() => {
                    setShowPassword((prev) => !prev);
                  }}
                >
                  <Text style={styles.showText}>
                    {ShowPassword ? "Hide" : "Show"}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* CONFIRM PASSWORD */}
              <Text>Confirm Password</Text>

              <View style={styles.passwordInput}>
                <TextInput
                  style={styles.passwordText}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!ShowConfirmPassword}
                />

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPressIn={(e) => {
                    e.stopPropagation();
                  }}
                  onPress={() => {
                    setShowConfirmPassword((prev) => !prev);
                  }}
                >
                  <Text style={styles.showText}>
                    {ShowConfirmPassword ? "Hide" : "Show"}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* BUTTON */}
              <TouchableOpacity style={styles.signupButton}>
                <Text style={styles.signupText}>Sign Up</Text>
              </TouchableOpacity>

              {/* LOGIN */}
              <View style={styles.link}>
                <Text>Already have account? </Text>

                <Link href="/login">
                  <Text style={styles.loginText}>Login</Text>
                </Link>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },

  background: {
    flex: 1,
    width: "100%",
  },

  main: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },

  imageContainer: {
    height: 230,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  signupForm: {
    marginHorizontal: 30,
    backgroundColor: "#fff",
    padding: 20,
    minHeight: 500,
    borderRadius: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },

  input: {
    padding: 14,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 12,
  },

  passwordInput: {
    backgroundColor: "#eee",
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 12,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingLeft: 14,
    paddingRight: 14,
  },

  passwordText: {
    flex: 1,
    paddingVertical: 14,
  },

  showText: {
    color: "#aba117",
    fontWeight: "600",
  },

  signupButton: {
    backgroundColor: "#e6d80a",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },

  signupText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  link: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },

  loginText: {
    color: "#cbd50e",
    fontWeight: "bold",
  },
});
