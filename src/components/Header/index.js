import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container, Top, Logo} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {logo} from '~/assets/Nubank_Logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Text style={styles.title}>Arthur</Text>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
