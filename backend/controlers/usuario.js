const { usuarioModel } = require('../models/usuario');
const jwt = require('jsonwebtoken');
const secretKey = 'chave_secreta_do_token';

// npm install jsonwebtoken

exports.getusuario = async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Token inválido.' });
      }

      const getUsuarios = async () => {
        const usuarios = await usuarioModel.find();
        return usuarios;
      };

      getUsuarios()
        .then((usuarios) => res.json(usuarios))
        .catch((error) => res.status(500).json({ message: error.message }));
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createusuario = async (req, res) => {
  try {
    const { email, nome, senha, nrsec } = req.body;

    const payload = {
      email,
      nome,
      senha,
      nrsec
    };

    const newUser = new usuarioModel(payload);
    newUser.token = jwt.sign(payload, secretKey);

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    console.log(email, senha)
    // Verifica se o e-mail existe no banco de dados
    const usuario = await usuarioModel.findOne({ email, senha });
    console.log(usuario)

    if (!usuario) {
      return res.status(400).json({ message: 'E-mail ou senha inválidos' });
    }

    // Verifica se a senha é válida
   

    const token = jwt.sign({ id: usuario._id }, secretKey);

    res.status(200).json({ message: 'Logado', token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.ValidaUser = async (req, res) => {

  const UserFront = req.body
  const UserBd =  await usuarioModel.findOne({email: req.body.email,senha: req.body.senha});
  if(!UserBd){
      res.status(401).send("Credenciais invalidas")
  }else{
      const token = UserBd.token;

      jwt.verify(token, secretKey, (err, decodedToken) => {
          if (err) {
            return res.status(401).json({ message: 'Invalid token' });
          } else {               
                  res.status(201).send("Validado1");
              
          }
        });    
  }
  
  
}

