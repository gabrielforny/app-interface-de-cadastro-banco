import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';

  import {Picker} from '@react-native-community/picker';
  import Slider from '@react-native-community/slider';

export default function App(){
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [limite, setLimite] = useState(250);
  const [estudante, setEstudante] = useState(false);
  const [sexo, setSexo] = useState(0);
  const [sexos, setSexos] = useState([
    {sexoNome: 'Masculino', valor: 1},
    {sexoNome: 'Feminino', valor: 2},
  ]);


  //Alerta caso algum campo fique em branco
  function enviarDados(){

    if(nome === '' || idade === ''){
      alert('Preencha todos dados!')
      return;
    }

    alert(
      'Bem vindo! Sua conta foi aberta com sucesso!! \n\n' + 
      'Nome: '+nome + '\n' + 
      'Idade: ' + idade + '\n' +
      'Sexo: '+ sexos[sexo].sexoNome + ' \n' +
      'Seu limite: R$ ' + limite.toFixed(2) + '\n' +
      'Conta Estudante ' + (estudante ? 'Ativo' : 'Inativo')
      );
  
  }

    //Retorna os items do Picker do sexo M ou F
    let sexoItems = sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.sexoNome}/>
    }); 

    return(
      <View style={styles.container}>
      <Text style={styles.bancoLogo}>ABERTURA DE CONTA</Text>
     
     <View style={styles.areaNome}>
   
        <Text style={styles.textoNome}>Nome:</Text>
        <TextInput style={styles.inputNome}
            placeholder="Digite seu nome"
            onChangeText={(texto) => setNome(texto)}
            
        />
      </View>

      <View style={styles.areaIdade}>
        <Text style={styles.textoNome}>Idade:</Text>
        <TextInput style={styles.inputIdade} 
            placeholder="Digite sua idade"
            onChangeText={(texto) => setIdade(texto)}
            keyboardType="numeric" // Deixando teclado apenas numerico
        />
      </View>
     
        <View style={styles.areaSexo}>  
          <Text style={styles.textoNome}>Sexo:</Text>
          <Picker style={styles.pickerSexo} 
                  selectedValue={sexo} 
                  onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>  
                            
          {sexoItems}
          
          </Picker>
        </View>

        <View style={styles.limiteArea}>
              <Text style={styles.textoNome}>Qual é o seu limite?</Text>
            <Slider 
              minimumTrackTintColor="#00FF00" 
              minimumValue={100} //Valor minimo do slide
              maximumValue={2000} //Valor máximo do slide
              value={limite}
              onValueChange={(limite)=> setLimite(limite)}
            />
              <Text style={styles.limiteTexto}>Seu limite é de: R$ {limite.toFixed(0)},00</Text>
        </View> 


        <View style={styles.areaEstudante}>
          <Text style={styles.textoNome}>Você é estudante?</Text>
          <Switch 
          style={styles.botaoEstudante}
          trackColor='#00FF00' 
          value={estudante} 
          onValueChange={(valorEstudante) => setEstudante(valorEstudante)}
          />
        </View>


      
        <TouchableOpacity style={styles.botao} onPress={ enviarDados } >
            <Text style={styles.botaoTexto}>Abrir Conta</Text>
        </TouchableOpacity>
  

      </View>
    
    );

}

const styles = StyleSheet.create({
  container:{
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#808080'
  },
  areaNome:{
    flexDirection: 'row',
    margin: 10,
    marginTop: 20
  },
  areaIdade:{
    flexDirection: 'row',
    margin: 10,
  },
  bancoLogo:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF'
  },
  textoNome:{
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 5
  },
  inputIdade:{
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#00FF00',
    backgroundColor: '#EEEEEE',
    color: '#000',
    height: 40,
    padding: 10,
    textAlign: 'center',
    width: 300,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  inputNome:{
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#00FF00',
    backgroundColor: '#EEEEEE',
    color: '#000',
    height: 40,
    padding: 10,
    textAlign: 'center',
    width: 300,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  areaSexo:{
     flexDirection: 'row',
     alignItems: 'center',
     padding: 5,
     paddingLeft: 20,
     marginTop: 10,
     backgroundColor: '#5f5f5f',
     borderRadius: 20,
     justifyContent: 'center'
 },
 pickerSexo:{
    flex:1,
    color: '#FFF',
  },
limiteArea:{

    flexDirection:'column',
    marginTop: 20,
    padding: 10
},
limiteTexto:{
  color: '#00FF00',
  fontSize: 20,
  fontWeight: 'bold',
  paddingLeft: 5,
  textAlign: 'center',
},
areaEstudante:{
  flexDirection: 'row', 
  alignItems: 'center',
  padding: 20
},
botaoEstudante:{
  paddingLeft: 150
},
botao:{
 height: 50,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#00FF00',
 borderRadius: 150,
 margin: 10
},
botaoTexto:{
   fontSize: 20,
   fontWeight: 'bold',
   color: '#FFFFFF'
},

});

