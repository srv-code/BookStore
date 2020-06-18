import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Card, CardItem, Text, Button, Icon } from 'native-base';
import { Rating } from 'react-native-ratings';
import { Book } from '../../../../apis/fetchBookDetails';
import {
  addBookToCart,
  removeBookFromCart,
} from '../../../../apis/updatePurchaseDetails';

interface BookCardProps {
  book: Book;
  showCartAddButton?: boolean;
  showCartRemoveButton?: boolean;
  showPayButton?: boolean;
}

export default function bookCard(props: BookCardProps) {
  const coverImageURI = require('../../../../assets/images/book-cover-sample.jpg');

  const addToCartHandler = (bookId: number) => {
    addBookToCart(bookId);
  };

  const removeFromCartHandler = (bookId: number) => {
    removeBookFromCart(bookId);
  };

  const purchaseHandler = (bookId: number) => {
    console.log(`Purchased book: bookId=${bookId}`);
  };

  return (
    <Card style={styles.cardContainer}>
      <CardItem cardBody>
        <Image source={coverImageURI} style={styles.coverImage} />
      </CardItem>
      <CardItem style={styles.infoCard}>
        <Text style={styles.title}>{props.book.title}</Text>
        <Text style={styles.author}>by {props.book.author}</Text>
        <View style={styles.priceView}>
          <Icon type='Foundation' style={styles.priceImage} name='dollar' />
          <Text style={styles.priceText}>{props.book.price}</Text>
        </View>

        <View style={styles.ratingView}>
          <Rating
            type='star'
            startingValue={props.book.rating}
            ratingCount={5}
            imageSize={40}
            // showRating
            readonly
          />
        </View>
      </CardItem>

      <CardItem style={styles.buttonCard}>
        {props.showCartAddButton && (
          <Button
            iconLeft
            style={styles.button}
            onPress={() => addToCartHandler(props.book.id)}>
            <Icon name='cart' />
            <Text>Add to cart</Text>
          </Button>
        )}

        {props.showPayButton && (
          <Button
            iconLeft
            style={styles.button}
            onPress={() => purchaseHandler(props.book.id)}>
            <Icon type='MaterialIcons' name='payment' />
            <Text>Continue & Pay</Text>
          </Button>
        )}

        {props.showCartRemoveButton && (
          <Button
            iconLeft
            style={styles.button}
            onPress={() => removeFromCartHandler(props.book.id)}>
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
