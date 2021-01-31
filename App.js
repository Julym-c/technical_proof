import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import cardsJSON from './data.json';

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff3e6',
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    backgroundColor: '#fff3e6',
    margin:15 
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  image: {
    height:250,
    width:250,
    marginBottom:15
  },
  title: {
    color:'#222831',
    fontSize:16,
    fontWeight: 'bold'
  },
  text: {
    color: '#393e46',
    fontSize:12,
    paddingTop:5
  },
  fixToText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: 250
  },
});

class Cinema extends Component {
  state = {
  cards: []
  }

  componentDidMount() {
    let cards = { ...this.state.cards};
    cards = cardsJSON;
    this.setState({ cards })
  }
  render(){
    
  return (
      this.state.cards.map((card, index) => {
        return (
        <View  key={index} 
        style={styles.container}>
          <Image style={styles.image} source={{uri: card.image}}/>
          {/* texto */}
          <Text style={styles.title}>
            {card.title}
          </Text>
          <Text style={styles.text}>
            {card.genre}
          </Text>
          <Text style={styles.text}>
            {card.price}
          </Text>
          <Text style={styles.text}>
            {card.inventory}
          </Text>
          <Text style={styles.text}>
            {card.date}
          </Text>  
          {/* Boton */}
          <View style={styles.fixToText}>
            <Button 
              color='#c1a1d3'
              width= '100'
              title="Me gusta"
              onPress={() => Alert.alert('Left button pressed')}
            />
            <Button
              borderRadius='20'
              color='#1a508b'
              title="Comprar"
              onPress={() => Alert.alert('Right button pressed')}
            />
          </View>
          
        </View>
        )
      })
    );
  }
}

export default Cinema;