import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Book } from '../../../../apis/bookList';
import BookCard from '../../card/bookCard/bookCard';

interface BookCardListProps {
  horizontal?: boolean;
  books: Book[];
}

export default function bookCardList(props: BookCardListProps) {
  console.log(`bookCardList: will load book list: %O`, props.books);

  return (
    <View>
      {props.books.length > 0 && (
        <FlatList
          horizontal={props.horizontal}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
          legacyImplementation={false}
          style={styles.list}
          keyExtractor={(item: Book) => item.id.toString()}
          data={props.books}
          renderItem={({ item }) => (
            <BookCard
              onCartAdd={() => console.log('book added to cart: %O', item)}
              title={item.title}
              // coverImageURI='../../../../assets/images/book-cover-sample.jpg
              author={item.author}
              price={item.price}
              rating={item.rating}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});
