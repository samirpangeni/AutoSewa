import { Link } from "expo-router";
import { useState } from "react";

import {
    ActivityIndicator,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureMode, setSecureMode] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.safeArea}>
      {/* Top section */}
      <View style={styles.topSection}>
        {/* Farmer image */}
        <Image
          source={{
            uri: "https://cdn.dribbble.com/userupload/22910073/file/original-f308c35778d329518ef2b88f866111ec.gif",
          }}
          style={styles.farmerImage}
        />
      </View>

      {/* Login section */}
      <KeyboardAwareScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
        extraScrollHeight={10}
        extraHeight={100}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.loginCard}>
          <Text style={styles.label}>Email</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
            />
          </View>

          {/* Password */}
          <Text style={styles.label}>Password</Text>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor="#666"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={secureMode}
              returnKeyType="done"
            />

            <TouchableOpacity
              activeOpacity={0.7}
              onPressIn={(e) => {
                e.stopPropagation();
              }}
              onPress={() => {
                setSecureMode((prev) => !prev);
              }}
            >
              <Text style={styles.showText}>
                {secureMode ? "Hide" : "Show"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          {/* Login */}
          <TouchableOpacity
            style={[styles.loginButton, loading && styles.loginButtonDisabled]}
            disabled={loading}
          >
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="#fff" />

                <Text style={styles.loginButtonText}>Logging in...</Text>
              </View>
            ) : (
              <Text style={styles.loginButtonText}>Login</Text>
            )}
          </TouchableOpacity>

          {/* OR */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />

            <Text style={styles.orText}>OR</Text>

            <View style={styles.divider} />
          </View>

          {/* Social */}
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialText}>Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Signup */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>

            <Link href="/sign" asChild>
              <TouchableOpacity>
                <Text style={styles.signupLink}>Sign up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  topSection: {
    width: "100%",
    height: 280,
    position: "relative",
  },

  farmerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },

  scrollView: {
    flexGrow: 0,
  },

  scrollContent: {
    flexGrow: 1,
  },

  loginCard: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 35,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
    marginTop: 5,
  },

  inputContainer: {
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 14,
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  input: {
    flex: 1,
    height: "100%",
    color: "#040000",
    marginLeft: 10,
    fontSize: 15,
  },

  passwordContainer: {
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 14,
    paddingHorizontal: 15,
  },
  showText: {
    color: "#aba117",
    fontWeight: "600",
  },
  passwordInput: {
    flex: 1,
    height: "100%",
    color: "#060000",
    marginLeft: 10,
    fontSize: 15,
  },

  eyeButton: {
    padding: 5,
  },

  forgotButton: {
    alignSelf: "flex-end",
    paddingVertical: 8,
  },

  forgotText: {
    color: "#555",
    fontSize: 14,
  },

  loginButton: {
    width: "100%",
    height: 52,
    backgroundColor: "#e6d80a",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  loginButtonDisabled: {
    opacity: 0.7,
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },

  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },

  orText: {
    color: "#777",
    marginHorizontal: 12,
    fontSize: 13,
  },

  socialContainer: {
    flexDirection: "row",
    gap: 12,
  },

  socialButton: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  socialText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  signupText: {
    color: "#777",
    fontSize: 15,
  },

  signupLink: {
    color: "#cbd50e",
    fontSize: 15,
    fontWeight: "bold",
  },
});
