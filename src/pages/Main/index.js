import React from 'react';
import Menu from '~/components/Menu';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />

        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 236.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 134.200,00 recebida de TikTok S.A hoje àw 09:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
