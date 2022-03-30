import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getSuccesfullLogin } from "../../functions/energy-api";

const LoginScreen = ({ setLoggedIn, setLoginDetails }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState('')

  const login = async () => {
    const success = await getSuccesfullLogin(email);
    if (success) setLoggedIn(true);
    setLoginDetails(email)
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/header01.png")}
        style={{ position: "absolute" }}
      />
      <Image
        source={require("../../assets/logo.png")}
        style={{ position: "absolute", top: 50, right: "35%" }}
      />
      <View style={styles.box}>
        <Text style={styles.title}>Email or My OVO ID</Text>
        <TextInput
          style={styles.input}
          onChangeText={(event) => setEmail(event)}
          value={email}
        />
        <Text style={styles.title}>Password</Text>

        <TextInput
          style={styles.input}
          onChangeText={(event) => setPw(event)}
          value={pw}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => login()}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRevert}
          // onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: "#0D8426", fontSize: 18, fontWeight: "700" }}>
            Reset my password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  box: {
    paddingHorizontal: 20,
    marginTop: 150,
    paddingVertical: 20,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "gray",
    shadowRadius: 5,
    shadowOpacity: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 14,
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    height: 53,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    alignSelf: "center",
  },
  button: {
    height: 53,
    marginTop: 25,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#0D8426",
  },
  buttonRevert: {
    height: 53,
    marginTop: 25,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#0D8426",
  },
});

export { LoginScreen };
