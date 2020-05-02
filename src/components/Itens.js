import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Itens extends React.Component {
  render() {
   return (
      <View style={styles.iten}>

         <View style={styles.foto}>
            <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.iten.foto}}/>
         </View>

         <View style={styles.itensdetails}>
            <Text style={styles.txtTitle}>{this.props.iten.titulo}</Text>
            <Text style={styles.txtPrice}>${this.props.iten.valor},00</Text>
            <Text style={styles.txtCityDate}>City: {this.props.iten.local_anuncio}</Text>
            <Text style={styles.txtCityDate}>Date: {this.props.iten.data_publicacao}</Text>
         </View>
      </View>
   );
  }
 }

 const styles = StyleSheet.create({
   iten: {
      borderWidth: 0.5,
      borderColor: '#999',
      margin: 10,
      padding: 10,
      flexDirection: 'row',
      backgroundColor: '#fff'
   },
   foto: {
      width: 102,
      height: 102
   },
   itensdetails: {
      marginLeft: 20,
      flex: 1
   },
   txtTitle: {
      fontSize: 18,
      color: 'blue',
      marginBottom: 5
   },
   txtPrice: {
      fontSize: 16,
      fontWeight: 'bold'
   },
   txtCityDate: {
      fontSize: 16
   }

 });