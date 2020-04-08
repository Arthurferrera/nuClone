import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, TabsContainer, TabItem, TabText} from './styles';
import {StyleSheet} from 'react-native';

export default function Tabs({translateY}) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      }}>
      <TabsContainer>
        <TabItem>
          <Icon name="smartphone" size={24} color="#FFF" />
          <TabText>Recarga de celular</TabText>
        </TabItem>
        <TabItem>
          <Icon name="swap-horiz" size={24} color="#FFF" />
          <TabText>Ajustar Limite</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>
        <TabItem>
          <Icon name="credit-card" size={24} color="#FFF" />
          <TabText>Cartão Virtual</TabText>
        </TabItem>
        <TabItem>
          <Icon name="help-outline" size={24} color="#FFF" />
          <TabText>Me ajuda</TabText>
        </TabItem>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="payment" size={24} color="#FFF" />
          <TabText>Psgar</TabText>
        </TabItem>
        <TabItem style={styles.organizeTabs}>
          <Icon
            name="format-line-spacing"
            size={24}
            color="#FFF"
          />
          <TabText>Organizar Atalhos</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  organizeTabs: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
