import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Card, CardItem, Text, Button, Icon } from 'native-base';
import { Rating } from 'react-native-ratings';

interface BookCardProps {
  coverImageURI?: string;
  title: string;
  author: string;
  price: number;
  rating: number;

  onCartAdd?: () => void;
  onCartRemove?: () => void;
  onPay?: () => void;
}

export default function bookCard(props: BookCardProps) {
  const coverImageURI = require('../../../../assets/images/book-cover-sample.jpg');

  return (
    <Card style={styles.cardContainer}>
      <CardItem cardBody>
        <Image source={coverImageURI} style={styles.coverImage} />
      </CardItem>
      <CardItem style={styles.infoCard}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.author}>by {props.author}</Text>
        <View style={styles.priceView}>
          <Icon type='Foundation' style={styles.priceImage} name='dollar' />
          <Text style={styles.priceText}>{props.price}</Text>
        </View>

        <View style={styles.ratingView}>
          <Rating
            type='star'
            startingValue={props.rating}
            ratingCount={5}
            imageSize={40}
            // showRating
            readonly
          />
        </View>
      </CardItem>

      <CardItem style={styles.buttonCard}>
        {props.onCartAdd && (
          <Button iconLeft style={styles.button}>
            <Icon name='cart' />
            <Text>Add to cart</Text>
          </Button>
        )}

        {props.onPay && (
          <Button iconLeft style={styles.button}>
            <Icon type='MaterialIcons' name='payment' />
            <Text>Continue & Pay</Text>
          </Button>
        )}

        {props.onCartRemove && (
          <Button iconLeft style={styles.button}>
            <Icon type='MaterialIcons' name='remove-shopping-cart' />
            <Text>Remove from cart</Text>
          </Button>
        )}
      </CardItem>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    // height: 350,
    // width: 200,
  },
  coverImage: {
    height: 200,
    width: null,
    flex: 1,
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 28,
    color: 'gray',
    fontWeight: 'bold',
  },
  author: {
    color: 'gray',
    fontSize: 22,
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  priceImage: {
    color: 'red',
  },
  priceText: {
    fontStyle: 'italic',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
  ratingView: {
    width: '100%',
  },
  buttonCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
  button: {
    marginTop: 2,
    marginLeft: 2,
  },
});
