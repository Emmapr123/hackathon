import { useNavigation } from "@react-navigation/core";
import { Modal } from "@ui-kitten/components";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

const SpendingModal = ({ modalVisible, getModalVisible }) => {
  const navigation = useNavigation();

  const navigate = () => {
    getModalVisible(false);
    navigation.navigate("Budget Tracker");
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          getModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Thank you for putting in your budget, we can now start tracking
              your goals
            </Text>
            <View style={{ display: "flex", flexDirection: "row", justifyContent:'space-around' }}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => getModalVisible(false)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => navigate()}
              >
                <Text style={styles.textStyle}>To tracking</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => console.log(modal)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "gray",
    margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#006945",
  },
  buttonClose: {
    backgroundColor: "#006945",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export { SpendingModal };
