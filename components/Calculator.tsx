import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');
// Ajuste de tamaño para asegurar que 4 columnas quepan en pantalla con márgenes
const BUTTON_SIZE = Math.floor((width - 64) / 4) - 8;

export default function Calculator() {
  const [formula, setFormula] = useState('');

  // Eliminado: inputNumber y variables obsoletas

  const appendToFormula = (value: string) => {
    setFormula((prev) => prev + value);
  };

  const clear = () => {
    setFormula('');
  };

  const performCalculation = () => {
    try {
      // Reemplazar operadores para JS
      let evalFormula = formula.replace(/×/g, '*').replace(/÷/g, '/');
      // Evaluar la expresión
       
      const result = eval(evalFormula);
      setFormula(result.toString());
    } catch {
      Alert.alert('Error', 'Fórmula inválida');
    }
  };

  const Button = ({ 
    title, 
    onPress, 
    style, 
    textStyle, 
    isWide = false,
    isTall = false 
  }: {
    title: string;
    onPress: () => void;
    style?: any;
    textStyle?: any;
    isWide?: boolean;
    isTall?: boolean;
  }) => (
    <TouchableOpacity
      style={[
        styles.button,
        isWide && styles.wideButton,
        isTall && styles.tallButton,
        style
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calculatorCard}>
        {/* Display */}
        <View style={styles.displayContainer}>
          <TextInput
            style={styles.displayText}
            value={formula}
            onChangeText={setFormula}
            placeholder="0"
            keyboardType="default"
            multiline={false}
            textAlign="right"
            autoCorrect={false}
            autoCapitalize="none"
            selectTextOnFocus={true}
          />
        </View>

        {/* Button Grid */}
        <View style={styles.buttonGrid}>
          {/* Matriz 5 filas x 4 columnas */}
          <View style={styles.buttonRow}>
            <Button title="C" onPress={clear} style={styles.numberButton} textStyle={styles.numberButtonText} />
            <Button title="(" onPress={() => appendToFormula('(')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
            <Button title=")" onPress={() => appendToFormula(')')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
            <Button title="÷" onPress={() => appendToFormula('÷')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
          </View>
          <View style={styles.buttonRow}>
            <Button title="7" onPress={() => appendToFormula('7')} style={styles.numberButton} textStyle={styles.numberButtonText} />
            <Button title="8" onPress={() => appendToFormula('8')} style={styles.numberButton} textStyle={styles.numberButtonText} />
            <Button title="9" onPress={() => appendToFormula('9')} style={styles.numberButton} textStyle={styles.numberButtonText} />
            <Button title="×" onPress={() => appendToFormula('×')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
          </View>
          <View style={styles.buttonRow}>
            <Button title="4" onPress={() => appendToFormula('4')} style={styles.numberButton} textStyle={styles.numberButtonText} />
            <Button title="5" onPress={() => appendToFormula('5')} style={styles.numberButton} textStyle={styles.numberButtonText} />
            <Button title="6" onPress={() => appendToFormula('6')} style={styles.numberButton} textStyle={styles.numberButtonText} />
            <Button title="-" onPress={() => appendToFormula('-')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
          </View>
          <View style={styles.buttonRow}>
            <Button title="1" onPress={() => appendToFormula('1')} style={styles.numberButton} textStyle={styles.numberButtonText} />
            <Button title="2" onPress={() => appendToFormula('2')} style={styles.numberButton} textStyle={styles.numberButtonText} />
            <Button title="3" onPress={() => appendToFormula('3')} style={styles.numberButton} textStyle={styles.numberButtonText} />
            <Button title="+" onPress={() => appendToFormula('+')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
          </View>
          <View style={styles.buttonRow}>
            <Button title="0" onPress={() => appendToFormula('0')} style={styles.numberButton} textStyle={styles.numberButtonText} />
            <Button title="." onPress={() => appendToFormula('.')} style={styles.numberButton} textStyle={styles.numberButtonText} />
            <Button title="⌫" onPress={() => setFormula(prev => prev.slice(0, -1))} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
            <Button title="=" onPress={performCalculation} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  calculatorCard: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    // Quitar sombra y borde
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 8,
    // elevation: 8,
    // borderWidth: 2,
    // borderColor: '#e5e7eb',
  },
  displayContainer: {
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  displayText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    fontFamily: 'Inter18Medium',
    textAlign: 'right',
  },
  buttonGrid: {
    gap: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  bottomSection: {
    flexDirection: 'row',
    gap: 12,
  },
  leftSection: {
    flex: 1,
    gap: 12,
  },
  button: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  wideButton: {
    width: BUTTON_SIZE * 2 + 12, // Two buttons width plus gap
  },
  tallButton: {
    height: BUTTON_SIZE * 2 + 12, // Two buttons height plus gap
  },
  numberButton: {
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
  },
  operatorButton: {
    backgroundColor: '#000000', // Changed from orange to black
    borderColor: '#000000',
  },
  equalsButton: {
    backgroundColor: '#000000', // Changed from orange to black
    borderColor: '#000000',
    height: BUTTON_SIZE * 2 + 12, // Tall button
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
  },
  numberButtonText: {
    color: '#1f2937',
  },
  operatorButtonText: {
    color: '#ffffff', // White text on black buttons
  },
  // ...existing code...
});