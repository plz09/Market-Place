import React from 'react';
import { ScrollView } from 'react-native';

import axios from 'axios';
import Itens from './Itens';

export default class ListItens extends React.Component {

  constructor(props) {
    super(props);

    this.state = { listItens: [] };
  }

  componentWillMount() {
    //HTTP request
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then(response => { this.setState({listItens: response.data}); })
    .catch(() => { console.log('Error to get the data')});
  }
  render() {
   return (
      <ScrollView style={{backgroundColor: '#ddd'}}>
        { this.state.listItens.map(iten => (<Itens key={iten.titulo} iten={iten} />))}
      </ScrollView>
   );
  }
 }
