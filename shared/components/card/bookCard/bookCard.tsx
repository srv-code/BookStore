import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

interface BookCardProps {
  onCartAdd?: () => void;
  onCartRemove?: () => void;
  onPay?: () => void;
}

export default function bookCard(props: BookCardProps) {
  const imageURI = '../../../../assets/images/book-cover-sample.jpg';

  return (
    <Card>
      {/* <CardItem style={{flexDirection: 'row'}}>
        <Left> */}
      {/* <Thumbnail style={{
            borderRadius: 0,
            height: 200, width: null, flex: 1
          }} large source={require(imageURI)} />
           */}
      {/* <Image <Image source={require('../assets/heart_logo.png')} /> */}

      {/* <Image source={require(imageURI)} /> */}

      {/* </Left> */}
      {/* <Body>
            <Text>NativeBase</Text>
            <Text note>GeekyAnts</Text>
          </Body> */}
      {/* </CardItem> */}
      <CardItem cardBody>
        <Image
          source={require(imageURI)}
          style={{ height: 200, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            fontSize: 28,
            color: 'gray',
            fontWeight: 'bold',
          }}>
          Title
        </Text>
        <Text style={{ color: 'gray', fontSize: 24 }}>by Author</Text>
        <Text style={{ fontStyle: 'italic', color: 'red', fontWeight: 'bold' }}>
          $ 12.99
        </Text>

      </CardItem>

      <CardItem
        style={{
          // width: '100%',
          // borderWidth: 2,
          // borderColor: 'blue',

          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          // justifyContent: 'space-evenly',
        }}>
        {props.onCartAdd && (
          <Button iconLeft style={{ marginTop: 2, marginLeft: 2 }}>
            <Icon name='cart' />
            <Text>Add to cart</Text>
          </Button>
        )}

        {props.onPay && (
          <Button iconLeft style={{ marginTop: 2, marginLeft: 2 }}>
            <Icon type='MaterialIcons' name='payment' />
            <Text>Continue & Pay</Text>
          </Button>
        )}

        {props.onCartRemove && (
          <Button iconLeft style={{ marginTop: 2, marginLeft: 2 }}>
            <Icon type='MaterialIcons' name='remove-shopping-cart' />
            <Text>Remove from cart</Text>
          </Button>
        )}

        {/* <Button iconLeft>
            <Icon name='cart' />
            <Text>Add to cart</Text>
          </Button>

          <Button iconLeft>
            <Icon name='cart' />
            <Text>Add to cart</Text>
          </Button> */}

        {/* <Button iconLeft>
            <Icon name='cart' />
            <Text>Add to cart</Text>
          </Button>
          <Button iconLeft>
            <Icon name='cart' />
            <Text>Add to cart</Text>
          </Button> */}
      </CardItem>

      {/* <CardItem>
        <Left>
          <Button>
            <Icon active name='cart' />
            <Text>Add to cart</Text>
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Icon active name='chatbubbles' />
            <Text>4 Comments</Text>
          </Button>
        </Body>
        <Right>
          <Text>11h ago</Text>
        </Right>
      </CardItem> */}
    </Card>
  );
}

const styles = StyleSheet.create({});
