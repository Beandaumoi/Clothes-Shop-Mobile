import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {images, colors, icons} from '../constants';

function UIInput(props) {
  const [inputLineColor, setInputLineColor] = useState(colors.inactive);
  const customOnFocus = () => {
    props?.onFocus;
    setInputLineColor(colors.primary);
  };

  const customOnBlur = () => {
    props?.onBlur;
    setInputLineColor(colors.inactive);
  };
  const {title, autoCapitalize, secureTextEntry} = props;
  return (
    <View>
      <Text
        style={{
          marginTop: 20,
          fontSize: 16,
          fontWeight: '700',
          marginVertical: 10,
        }}>
        {title}
      </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        placeholder=" Type something"
        placeholderTextColor={colors.inactive}
        onBlur={customOnBlur}
        onFocus={customOnFocus}
        style={{
          borderBottomWidth: 2,
          borderBottomColor: inputLineColor,
          marginRight: 30,
          paddingBottom: 5,
          fontSize: 16,
          fontWeight: '300',
          marginBottom: 10,
        }}
      />
    </View>
  );
}

export default UIInput;
