import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { InputInterface } from '@/components/ui/input/ReusableInput.types';
import { styles } from '@/components/ui/input/ReusableInput.style';

export const ReusableInput = ({
  style,
  inputStyle,
  accessibilityLabel,
  placeholder,
  value: externalValue,
  onChangeText: externalOnChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
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
    <SafeAreaView style={style}>
      <TextInput
        style={[styles.input, inputStyle]}
        onChangeText={handleChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#999"
        accessibilityLabel={accessibilityLabel}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
    </SafeAreaView>
  );
};
