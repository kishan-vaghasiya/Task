import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
  StatusBar,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Input from '../../Components/TextInput/CustomTextInput';
import {scale, verticalScale, moderateScale} from '../../utils/Scaling';
import {COLORS} from '../../Theme/Colors';

export default function Register({navigation}) {
  const [username, setUsername] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const handleInputChange = setter => value => {
    setter(value);
    // Validate field when input changes
    setErrors(prevErrors => ({
      ...prevErrors,
      [setter.name]: '',
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }
    if (!mobile) {
      newErrors.mobile = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
      isValid = false;
    }
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = async () => {
    if (!validateForm()) {
      return;
    }

    console.log('Submitting data:', {
      username,
      lastName,
      email,
      mobile,
    });

    setLoading(true);

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          title: username + ' ' + lastName,
          body: `Email: ${email}\nMobile: ${mobile}`,
          userId: 1,
        },
      );

      console.log('Response data:', response.data);

      Alert.alert('Success', 'Registration successful');
      navigation.navigate('BottomTab');
    } catch (error) {
      console.error(
        'Error occurred:',
        error.response ? error.response.data : error.message,
      );
      Alert.alert('Error', 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryColor} />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Aviato Task</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.RegisterTxt}>Register form</Text>
        <Input
          title="Username"
          placeholder="Enter username"
          value={username}
          onChangeText={handleInputChange(setUsername)}
          errorMessage={errors.username}
        />
        <Input
          title="Email"
          placeholder="Enter Email"
          keyboardType="email-address"
          value={email}
          onChangeText={handleInputChange(setEmail)}
          errorMessage={errors.email}
        />
        <Input
          title="Mobile"
          placeholder="Enter Mobile No."
          keyboardType="number-pad"
          value={mobile}
          onChangeText={handleInputChange(setMobile)}
          errorMessage={errors.mobile}
          maxLength={10}
        />
        <Input
          title="Password"
          placeholder="Enter Password"
          isPassword={true}
          value={password}
          onChangeText={handleInputChange(setPassword)}
          errorMessage={errors.password}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleRegister}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color={COLORS.White} />
          ) : (
            <Text style={styles.buttonText}>Register</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  headerContainer: {
    backgroundColor: COLORS.primaryColor,
    borderBottomLeftRadius: scale(15),
    borderBottomRightRadius: scale(15),
    height: Dimensions.get('window').height * 0.2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(40),
  },
  title: {
    color: COLORS.White,
    fontSize: 31,
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: COLORS.White,
    borderRadius: moderateScale(8),
    marginHorizontal: scale(10),
    marginTop: scale(-20),
    paddingVertical: verticalScale(18),
    paddingHorizontal: scale(15),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  RegisterTxt: {
    fontWeight: 'bold',
    fontSize: moderateScale(19),
    color: COLORS.primaryColor,
    textAlign: 'center',
    marginBottom: scale(20),
  },
  loginButton: {
    backgroundColor: COLORS.primaryColor,
    borderRadius: moderateScale(30),
    width: scale(150),
    height: scale(38),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
    marginBottom: scale(16),
  },
  buttonText: {
    color: COLORS.White,
    fontSize: moderateScale(19),
  },
});
