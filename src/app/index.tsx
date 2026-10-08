import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <TextInput placeholder="Enter text" />
      <TouchableOpacity>
        <Text>Submit</Text>
      </TouchableOpacity>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
