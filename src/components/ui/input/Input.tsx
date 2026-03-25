import { useState } from 'react';
import { InputInterface } from '@/components/ui/input/Input.types';
import { styles } from '@/components/ui/input/Input.style';
import { TextInput, View, Text } from 'react-native';

export const Input = ({
  placeholder,
  value: externalValue,
  onChangeText: externalOnChangeText,
  onBlur,
  leftIcon,
  errorMessage,
  inputContainerStyle,
  errorStyle,
  secureTextEntry,
  keyboardType,
  autoCapitalize = 'none',
}: InputInterface) => {
  const [internalValue, setInternalValue] = useState('');
  const value = externalValue !== undefined ? externalValue : internalValue;

  const handleChangeText = (newText: string) => {
    if (externalOnChangeText) {
      externalOnChangeText(newText);
    } else {
      setInternalValue(newText);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, inputContainerStyle]}>
        {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon}</View>}

        <TextInput
          value={value}
          onChangeText={handleChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          underlineColorAndroid="transparent"
          style={[styles.input, { outlineStyle: 'none' }]}
        />
      </View>

      {errorMessage ? (
        <Text style={[styles.errorText, errorStyle]}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};
