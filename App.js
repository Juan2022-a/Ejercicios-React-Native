// byJP
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    let suma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(suma);
  };

  const dividir = () => {
    let div = parseFloat(numero1) / parseFloat(numero2);
    setResultado(div);
  };

  const restar = () => {
    let rest = parseFloat(numero1) - parseFloat(numero2);
    setResultado(rest);
  };

  const multiplicar = () => {
    let mult = parseFloat(numero1) * parseFloat(numero2);
    setResultado(mult);
  };

  const clean = () => {
    setNumero1('');
    setNumero2('');
    setResultado(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Operaciones matemáticas</Text>

      <Text style={styles.label}>Número 1:</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese el número 1'
        value={numero1}
        onChangeText={setNumero1}
        keyboardType='numeric'
      />

      <Text style={styles.label}>Número 2:</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese el número 2'
        value={numero2}
        onChangeText={setNumero2}
        keyboardType='numeric'
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.roundedButton} onPress={sumar}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.roundedButton} onPress={restar}>
          <Ionicons name="remove" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.roundedButton} onPress={multiplicar}>
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.roundedButton} onPress={dividir}>
          <Ionicons name="alert-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.resultText}>El valor del número 1: {numero1}</Text>
      <Text style={styles.resultText}>El valor del número 2: {numero2}</Text>
      <Text style={styles.resultText}>Resultado: {resultado}</Text>

      <TouchableOpacity style={styles.cleanButton} onPress={clean}>
        <Text style={styles.buttonText}>Limpiar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  roundedButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  cleanButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  resultText: {
    color: '#333',
    fontSize: 18,
    marginTop: 10,
  },
});
