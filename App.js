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
    margin:15,
    textAlign: 'center'
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
    color:'#312c51',
    fontSize:20,
    fontWeight: 'bold',
    paddingBottom: 20
  },
  text: {
    color: '#393e46',
    fontSize:14,
    paddingTop:5
  },
  fixToText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: 250,
    fontSize: 20
  },
  textPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#48426d'
  },
  textInventory : {
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 500
  }
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
          <Text style={styles.title}>
            {card.title}
          </Text>

          <Image style={styles.image} source={{uri: card.image}}/>
          {/* texto */}
          
          <Text style={styles.textPrice}>
            Precio: ${card.price}
          </Text>
          <Text style={styles.text}>
            {card.genre}
          </Text>
          <Text style={styles.textInventory}>
            Quedan: {card.inventory}
          </Text>
          <Text style={styles.text}>
            {card.date}
          </Text>  
          {/* Boton */}
          <View style={styles.fixToText}>
            <Button 
              color='#c1a1d3'
              title="  ♥  "
              onPress={() => alert('Has hecho un me gusta')}
            />
            <Button 
              color='#c1a1d3'
              title="  +  "
              onPress={() => alert('Ver mas información')}
            />
            <Button
              borderRadius='20'
              color='#c1a1d3'
              title="Comprar"
              onPress={() => alert('Agregado')}
            />
          </View>
        </View>
        )
      })
    );
  }
}

export default Cinema;