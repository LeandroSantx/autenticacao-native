import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import usuarioService from '../services/usuarioService';


const Cadastro = () => {
  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    senha: '',
    nrsec: ''
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const teste = formData.nrsec = '123';
  
      if (
        formData.nome.trim() === '' ||
        formData.email.trim() === '' ||
        formData.senha.trim() === ''
      ) {
        alert('Preencha todos os campos!');
        return;
      }
  
      await usuarioService.postUsuario(formData, teste);
      alert('Inserido!');
  
      // Zerar os valores dos inputs
      setFormData({
        email: '',
        nome: '',
        senha: '',
        nrsec: ''
      });
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Faça o seu Cadastro</Text>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#cbd0f7"
          value={formData.nome}
          onChangeText={(text) => handleChange('nome', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#cbd0f7"
          value={formData.email}
          onChangeText={(text) => handleChange('email', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#cbd0f7"
          value={formData.senha}
          onChangeText={(text) => handleChange('senha', text)}
          secureTextEntry
          required
        />
      </View>
      <Button title="Cadastrar" onPress={handleSubmit} color="#4056d7"/>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b1f27',
    width:"100%",
  },
  heading: {
    padding: 0,
    margin: 0,
    fontWeight: '500',
    fontSize: 23,
    color: '#fff',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
    width:"50%",
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  input: {
    padding: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#555',
    marginTop: 5,
    borderRadius: 4,
    backgroundColor: '#252a34',
    color: '#cbd0f7',
    width: '100%',
  },
};

export default Cadastro;
