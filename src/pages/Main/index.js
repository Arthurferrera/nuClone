/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Menu from '~/components/Menu';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
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
  CardHeaderText,
} from './styles';

export default function Main() {
  let offset = 0;
  let visibilityMoney = true;

  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 420 : 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 420 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 420],
                    outputRange: [-50, 0, 420],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <CardHeaderText>Conta</CardHeaderText>
              <Icon
                onPress={() => {
                  visibilityMoney = !visibilityMoney;
                  console.log(visibilityMoney);
                }}
                name="visibility-off"
                size={28}
                color="#666"
              />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              {visibilityMoney ? (
                <Description>R$ 236.611,65</Description>
              ) : (
                <Description>NULL</Description>
              )}
            </CardContent>
            <CardFooter>
              <Icon
                name="attach-money"
                size={20}
                color="#000"
                style={{position: 'absolute', top: 32, left: 20}}
              />
              <Annotation>
                Transferência de R$ 134.200,00 recebida de TikTok S.A hoje às
                09:00h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
