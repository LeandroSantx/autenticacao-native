import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import usuarioService from '../services/usuarioService';
import { useNavigation } from '@react-navigation/native';



const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    console.log(email, senha);

    usuarioService
      .loginUsuario(email, senha)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          Alert.alert('Bem-vindo!');
          setEmail('');
          setSenha('');
        }
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Email ou senha inválidos');
      });
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.contentLogin}>
        <Text style={styles.heading}>Login</Text>

        <View style={styles.boxLogin}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#cbd0f7"
            value={email}
            onChangeText={(text) => setEmail(text)}
            required
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#cbd0f7"
            secureTextEntry
            value={senha}
            onChangeText={(text) => setSenha(text)}
            required
          />
          {error && <Text style={styles.errorMessage}>{error}</Text>}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

 

        <View style={styles.boxLembrarSenha}>
          <TouchableOpacity style={styles.cadastroButton} onPress={handleCadastro}>
            <Text style={styles.cadastroButtonText}>Crie uma conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#1a1a1a',
  },
  contentLogin: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b1f27',
    borderRadius: 7,
    padding: 40,
    width:'100%' ,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    gap: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
    color: '#fff',
  },
  boxLogin: {
    position: 'relative',
    width:'50%' ,

  },
  errorMessage: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    fontSize: 14,
    color: '#4125f7',
    margin: 0,
  },
  input: {
    padding: 15,
    fontSize: 14,
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 5,
    borderRadius: 4,
    backgroundColor: '#252a34',
    color: '#fff',
  },
  button: {
    backgroundColor: 'linear-gradient(to right, #f72585, #ff0676)',
    borderRadius: 4,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#cbd0f7',
    fontSize: 18,
  },
  boxLembrarSenha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  link: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  cadastroButton: {
    backgroundColor: '#4056d7',
    borderRadius: 4,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastroButtonText: {
    color: '#cbd0f7',
    fontSize: 18,
  },
};
export default Login;