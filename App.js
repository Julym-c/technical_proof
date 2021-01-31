import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import cardsJSON from './data.json';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexWrap: 'wrap',
   paddingTop: 22,
   justifyContent: 'center',
   alignItems: 'center',
   height: 250,
   backgroundColor: '#eff7e1',
   margin:15 
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  image: {
    alignItems: 'flex-start',
    height:100,
    width:100,
    marginBottom:15,
  },
  text: {
    fontSize:20,
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
          <Text style={styles.text}>
            {card.title} {card.genre} {card.price} {card.inventory} {card.date}
          </Text>      
        </View>
        )
      })
    );
  }
}

export default Cinema;