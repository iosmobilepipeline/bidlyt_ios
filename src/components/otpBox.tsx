import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../asstes/colors';

const OTPBOX = (props) => {
  const otpRef = useRef(null);

  useEffect(() => {
    if (otpRef.current) {
      setTimeout(() => otpRef.current.focusField(0), 250);
    }
  }, []);

  return (
    <View style={styles.boxWrapper}>
      <OTPInputView
        style={styles.inputBox}
        pinCount={props.pinCount}
        code={props.code}
        onCodeChanged={props.onCodeChanged}
        autoFocusOnLoad={false}
        codeInputFieldStyle={styles.codeInputFieldStyleBlank}
        codeInputHighlightStyle={styles.codeInputHighlightStyle}
        ref={otpRef}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boxWrapper: {
    width: '100%',
    padding: 10,
    marginTop: 15,
  },
  inputBox: {
    height: 100,
    width: '100%',
   

  },
  codeInputFieldStyleBlank: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 6,
    borderColor: COLORS.Paret,
    borderBottomColor: COLORS.Paret,
    color: COLORS.Black,
    fontSize: 30,
    backgroundColor:COLORS.Light_Paret
  },
  codeInputHighlightStyle: {
    borderBottomWidth: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderBottomColor: COLORS.Gray,
  },
});

export default OTPBOX;
