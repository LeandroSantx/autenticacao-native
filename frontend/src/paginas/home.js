import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.page}>
      <View style={styles.formLogin}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.description}>Bem-vindo à página inicial!</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btn} onPress={handleLogin}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.buttonSpacer} />
          <TouchableOpacity style={styles.btn} onPress={handleCadastro}>
            <Text style={styles.btnText}>Cadastro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  formLogin: {
    backgroundColor: '#333',
    borderRadius: 7,
    padding: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginBottom: 5,
  },
  title: {
    padding: 0,
    margin: 0,
    fontWeight: '500',
    fontSize: 28,
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#999',
    marginBottom: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
  },
  btn: {
    backgroundColor: '#f72585',
    borderRadius: 4,
    paddingVertical: 20,
    paddingHorizontal: 40,
    margin: 0,
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonSpacer: {
    width: 10, // Espaço desejado entre os botões
  },
  link: {
    color: '#f72585',
  },
};

export default Home;
