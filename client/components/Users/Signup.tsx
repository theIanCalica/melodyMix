import React, { useState } from 'react';
import axios from 'axios';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { GestureResponderEvent } from 'react-native';


const Signup = ({ navigation }: any) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    phoneNumber: '',
    dob: '',
    role: '', 
  });
 
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    const { name, email, password, gender, phoneNumber, dob } = formData;
    if (!name || !email || !password || !gender || !phoneNumber || !dob) {
      setErrorMessage('Please fill in all the fields');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault(); 

    if (!validateForm()) {
      return; 
    }

    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post("http://192.168.1.44:4000/api/v1/users/signup", formData, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.data.success) {
        setSuccessMessage('Registration successful!');
        console.log('Registration successful:', response.data);

        Alert.alert(
          "Registration Successful",
          "Do you want to login?",
          [
            {
              text: "Yes",
              onPress: () => {
                setTimeout(() => {
                  navigation.navigate('Home'); 
                }, 3000); 
              },
            },
            {
              text: "No",
              onPress: () => {}, 
            }
          ]
        );
      } else {
        setErrorMessage(response.data.message || 'Registration failed');
        console.error('Registration failed:', response.data.message);
      }
    } catch (error) {
      setErrorMessage('Error during registration: ' + (error instanceof Error ? error.message : ''));
      console.error('Error during registration:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
        />
        <Picker
          style={styles.input}
          selectedValue={formData.gender}
          onValueChange={(itemValue) => setFormData({ ...formData, gender: itemValue })}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Man" value="Man" />
          <Picker.Item label="Woman" value="Woman" />
          <Picker.Item label="Prefer not to say" value="Prefer not to say" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          value={formData.dob}
          onChangeText={(text) => setFormData({ ...formData, dob: text })}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.submitButtonText}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Text>
        </TouchableOpacity>
      </View>

      {successMessage && <Text style={styles.successMessage}>{successMessage}</Text>}
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

      <TouchableOpacity
        onPress={() => navigation.navigate('ArtistSignup')}
      >
        <Text style={styles.linkText}>Are you an artist? Sign up here</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#333',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#1E90FF',  
    fontSize: 16,
    textDecorationLine: 'underline',  
    marginTop: 20,
  },
  successMessage: {
    color: 'green',
    fontSize: 16,
    marginTop: 10,
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
});

export default Signup;
