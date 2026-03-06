import { useState } from 'react';
import { Input as RNInput } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { InputInterface } from '@/components/ui/input/Input.types';
import { styles } from '@/components/ui/input/Input.style';

export const Input = ({
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
      <RNInput
        value={value}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
        accessibilityLabel={accessibilityLabel}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        inputStyle={[styles.input, inputStyle]}
        containerStyle={styles.container}
        inputContainerStyle={styles.inputContainer}
      />
    </SafeAreaView>
  );
};
