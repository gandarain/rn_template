import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  return (
    <Container>
      <Header>
        <Left>
          <Icon
            accessibilityLabel="iconRightHeader"
            name="arrow-left"
            size={30}
            color={'white'}
          />
        </Left>
        <Body>
          <Title>Hello Puta</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>Lorem Ipsum</Text>
        </View>
        <View style={styles.containerDescription}>
          <Text style={styles.textDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textTitle: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    color: Colors.black,
  },
  containerDescription: {
    padding: 20,
  },
  textDescription: {
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
    color: Colors.black,
  },
});

export default App;
