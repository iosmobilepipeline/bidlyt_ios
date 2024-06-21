import * as React from 'react';
import { TextInput, useTheme } from 'react-native-paper';
import { COLORS } from '../asstes/colors';
import { Text, View } from 'react-native'

const TextInput_Custom = (props: any) => {
  const { colors } = useTheme();
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextInput
      label={props?.lable_text}
      value={props?.value}
      placeholder={props?.placeholder}
      outlineStyle={{ borderColor: COLORS.Paret }}
      activeOutlineColor={COLORS.Paret}

      style={[{ backgroundColor: isFocused ? COLORS.Light_Paret : 'transparent' }, props?.style]} // Change background color based on focus
      outlineColor={COLORS.Paret}
      onChangeText={props?.onChangeText}
      mode="outlined"
      theme={{ colors: { primary: COLORS.Paret }, }}
      keyboardType={props.keyboardType}
      onFocus={handleFocus}
      onBlur={handleBlur}

    />

  );
};

export default TextInput_Custom;
