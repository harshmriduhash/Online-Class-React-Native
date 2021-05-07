import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {Form, Item, Input, Label, Button, Icon} from 'native-base';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [componentWidth, setComponentWidth] = useState(
    Dimensions.get('window').width - 64,
  );
  const [titleMargin, setTitleMargin] = useState(
    Dimensions.get('window').height / 10,
  );
  const [footerPos, setFooterPos] = useState(
    Dimensions.get('window').height / 6,
    0,
  );
  useEffect(() => {
    const updateLayout = () => {
      setComponentWidth(Dimensions.get('window').width - 64);
      setTitleMargin(Dimensions.get('window').height / 10);
      setFooterPos(Dimensions.get('window').height / 6);
    };
    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });
  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <Text style={{...styles.title, marginVertical: titleMargin}}>
            Login
          </Text>
          <View style={{...styles.formContainer, width: componentWidth}}>
            <Form>
              <Item floatingLabel style={styles.formItem}>
                <Label style={styles.formLabel}>Username or Email</Label>
                <Input style={styles.formInput} />
              </Item>
              <Item floatingLabel style={styles.formItem}>
                <Label style={styles.formLabel}>Password</Label>
                <Input
                  secureTextEntry={!showPassword ? true : false}
                  style={styles.formInput}
                />
                <Icon
                  name={!showPassword ? 'eye' : 'eye-off'}
                  style={styles.eyeToggler}
                  onPress={() => setShowPassword(!showPassword)}
                />
              </Item>
            </Form>
            <Text style={styles.txtForgot}>Forgot password?</Text>
          </View>
          <View style={styles.btnGroup}>
            <Button style={{...styles.buttonLogin, width: componentWidth}}>
              <Text style={styles.buttonLabel}> Login </Text>
            </Button>
            <Button style={{...styles.buttonGoogle, width: componentWidth}}>
              <Image source={require('../assets/images/google-icon.png')} />
              <Text style={styles.buttonLabelGoogle}> Login with Google </Text>
            </Button>
          </View>

          <View style={{...styles.txtFooter, top: footerPos}}>
            <Text style={styles.txtNewUser}>New user?</Text>
            <Text style={styles.txtRegister}>Register</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    alignItems: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    alignContent: 'center',
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Kanit-Medium',
  },
  formContainer: {
    marginBottom: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: -16,
  },
  formInput: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ADA9BB',
    paddingLeft: 16,
    fontFamily: 'Roboto-Medium',
  },
  formItem: {
    borderBottomWidth: 0,
    height: 60,
  },
  formLabel: {
    marginLeft: 16,
    fontFamily: 'Kanit-Regular',
    color: '#ADA9BB',
    fontSize: 16,
  },
  eyeToggler: {
    position: 'absolute',
    right: 0,
    top: 20,
  },
  txtForgot: {
    marginTop: 12,
    textAlign: 'right',
    fontFamily: 'Roboto-Medium',
  },

  btnGroup: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonLogin: {
    justifyContent: 'center',
    marginTop: 102,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#5784BA',
    height: 50,
  },

  buttonLabel: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Kanit-Medium',
  },
  buttonGoogle: {
    justifyContent: 'center',
    marginTop: 12,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
    height: 50,
  },

  buttonLabelGoogle: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Kanit-Medium',
    marginLeft: 12,
  },
  txtFooter: {
    flexDirection: 'row',
    position: 'relative',
    // bottom: Dimensions.get('window').height - 32,
  },
  txtNewUser: {color: '#ADA9BB', fontFamily: 'Kanit-Medium', fontSize: 15},
  txtRegister: {
    fontFamily: 'Kanit-Medium',
    marginLeft: 5,
    color: '#5784BA',
    fontSize: 15,
  },
});

export default Login;
