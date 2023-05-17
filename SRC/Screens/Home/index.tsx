import { Text,View,TextInput,TouchableOpacity,ScrollView, Alert } from 'react-native';

import { styles } from './styles';

import { Participant } from '../../Components/Participant';

export  function Home(){
  const participants = [ 'Rodrigo', 'heber', 'Karine',' Nando', 'ama', 'mirian', 'selma', 'dani','rose',
  "Luan","Pedro","Caio", "Mariana", "Lígia", "Rafaela",
  'karol', 'jack', 'thainá', 'Sara','Socorro'];

  function handleParticipantAdd(){
    if(participants.includes ("Rodrigo")){
      return Alert.alert("Participante existe", 'Já existe na lista um participante com esse nome');
    }
    console.log("Você clicou no botão de adicionar!");
  }

  function handleParticipantRemove (name:String){
    Alert.alert("Remover", `Remover o participante ${name}?` , [
      {
        text: "sim",
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text:"Não",
        style: "cancel"
      }

    ]);
    console.log(`Você clicou no Botão Remover o participan ${name}`);/* o acento crase (``) e conhecido como
     interpolação de string permite que vc utilize texto com variavel */

  }

return(

  <View style ={styles.container}>
    <Text style = {styles.eventName}>
      Nome do Evento
    </Text>

    <Text style = {styles.eventDate}>
      Campo perguntas. 
    </Text>


    <View style={styles.form}>

    <TextInput style = { styles.input}
    placeholder="Digite o seu nome"
    placeholderTextColor= "#000000"
    /> 



    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
      < Text style = {styles.buttonText} >
      +
      </Text>
    
    </TouchableOpacity>

    </View>

<ScrollView showsVerticalScrollIndicator={false}>
  {
    participants.map(participant => (
      <Participant
        key={participant}
        name={participant}
        onRemove = {() => handleParticipantRemove("Participante")} 
      />
  ))
  }
</ScrollView>

</View>
)
}