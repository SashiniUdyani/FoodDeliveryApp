import { StatusBar } from 'expo-status-bar';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';
import { db } from '../../FirebaseDB';
import {
  doc,
  collection,
  onSnapshot,
  query,
  deleteDoc,
} from 'firebase/firestore';
import Checkbox from 'expo-checkbox';

export default function ViewCustomerDetails({ navigation }) {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    setFoodsItems();
  }, []);

  function setFoodsItems() {
    onSnapshot(query(collection(db, 'CustomerDetails')), (querySnapshot) => {
      let tempFoods = [];

      querySnapshot.forEach((doc) => {
        tempFoods.push({
          id: doc.id,
          name: doc.data()['name'],
          location: doc.data()['location'],
          time: doc.data()['time'],
          phoneNo: doc.data()['phoneNo'],
        });
      });
      setProfile(tempFoods);
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'flex-start', marginLeft: '45%' }}>
          <Text>MyProfile</Text>
        </View>
        {profile &&
          profile.map((item, key) => {
            return (
              <View key={key}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('UpdateCustomerDetails', {
                      customerID: item.id,
                      customerName: item.name,
                      customerLocation: item.location,
                      customerPhoneNo: item.phoneNo,
                      customerTime: item.time,
                    })
                  }
                >
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'gray',
                      borderStyle: 'solid',
                      borderRadius: 5,
                      minWidth: '90%',
                      marginLeft: 20,
                      marginRight: 20,
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 5,
                      paddingRight: 5,
                      flex: 1,
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      alignItems: 'flex-start',
                      backgroundColor: 'yellow',
                    }}
                  >
                    <View
                      style={{
                        width: '50%',
                      }}
                    >
                      <Text style={{ fontSize: 16, marginTop: 8 }}>
                        {item.name}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'gray',
                      borderStyle: 'solid',
                      borderRadius: 5,
                      minWidth: '90%',
                      marginLeft: 20,
                      marginRight: 20,
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 5,
                      paddingRight: 5,
                      flex: 1,
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      alignItems: 'flex-start',
                      backgroundColor: 'yellow',
                    }}
                  >
                    <View
                      style={{
                        width: '50%',
                      }}
                    >
                      <Text style={{ fontSize: 16, marginTop: 8 }}>
                        {item.location}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'gray',
                      borderStyle: 'solid',
                      borderRadius: 5,
                      minWidth: '90%',
                      marginLeft: 20,
                      marginRight: 20,
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 5,
                      paddingRight: 5,
                      flex: 1,
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      alignItems: 'flex-start',
                      backgroundColor: 'yellow',
                    }}
                  >
                    <View
                      style={{
                        width: '50%',
                      }}
                    >
                      <Text style={{ fontSize: 16, marginTop: 8 }}>
                        {item.phoneNo}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'gray',
                      borderStyle: 'solid',
                      borderRadius: 5,
                      minWidth: '90%',
                      marginLeft: 20,
                      marginRight: 20,
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 5,
                      paddingRight: 5,
                      flex: 1,
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      alignItems: 'flex-start',
                      backgroundColor: 'yellow',
                    }}
                  >
                    <View
                      style={{
                        width: '50%',
                      }}
                    >
                      <Text style={{ fontSize: 16, marginTop: 8 }}>
                        {item.time}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );

  // function deleteFood(id) {
  //     deleteDoc(doc(db, 'foods', id)).then(() => {

  //     })
  // }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 20,
  },
});
