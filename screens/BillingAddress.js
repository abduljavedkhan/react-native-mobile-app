import React, { useState } from 'react'
import { SafeAreaView } from 'react-native';
import { Text, View } from 'react-native'
import { Button, StyleSheet, TextInput, ScrollView } from 'react-native';
import * as billingAddressActions from '../store/actions/billingAddress';
import { useDispatch } from 'react-redux';

const BillingAddress = (props) => {
    const dispatch = useDispatch();
    // const OrderId = props.route.params.OrderId;
    const [name, setName] = useState('');
    const [addr, setAddr] = useState('');
    const [aptNum, setAptNum] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    //    const billingItem = props.route.params.itemId;
    //    console.log('itemId' + billingItem);

    const billAddrObj = {
        fullName: name,
        addr: addr,
        aptNum: aptNum,
        city: city,
        country: country,
        state: state
    }

    return (
        <ScrollView>
            <SafeAreaView>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textinput_style}
                        placeholder="Full Name"
                        placeholderTextColor="#42b3f5"
                        onChangeText={text => setName(text)}
                        value={name}
                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textinput_style}
                        placeholder="Address Line"
                        placeholderTextColor="#42b3f5"
                        onChangeText={text => setAddr(text)}
                        value={addr}
                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textinput_style}
                        placeholder="Apt Number"
                        placeholderTextColor="#42b3f5" onChangeText={text => setAptNum(text)}
                        value={aptNum}
                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textinput_style}
                        placeholder="City"
                        placeholderTextColor="#42b3f5" onChangeText={text => setCity(text)}
                        value={city}
                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textinput_style}
                        placeholder="Zip/Postal code"
                        placeholderTextColor="#42b3f5" onChangeText={text => setZipCode(text)}
                        value={zipCode}
                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textinput_style}
                        placeholder="Country"
                        placeholderTextColor="#42b3f5" onChangeText={text => setCountry(text)}
                        value={country}
                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textinput_style}
                        placeholder="State"
                        placeholderTextColor="#42b3f5" onChangeText={text => setState(text)}
                        value={state}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        color="#9ACD32"
                        title="Next"
                        onPress={() => {
                            dispatch(billingAddressActions.addBillAddr(billAddrObj));
                            props.navigation.navigate(
                                'PaymentDetails'
                        ,
                                // {
                                //     BillAddr: JSON.stringify(billAddrObj)
                                // }
                            );
                        }}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textinput_style: {
        /*  paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1*/
        borderBottomWidth: 1,
        width: "75%",
        borderColor: "#42b3f5",
        paddingHorizontal: 2,
        paddingVertical: 2,
    },
    buttonContainer: {
        marginTop: 45,
        width: "100%",
        borderColor: "#42b3f5",
        paddingHorizontal: 25,
        paddingVertical: 2,
    },
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    },
    bottomTitle: {
        color: 'black',
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }

}
);


export default BillingAddress;
