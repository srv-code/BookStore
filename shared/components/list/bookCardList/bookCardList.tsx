import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Book } from '../../../../apis/fetchBookDetails';
import BookCard from '../../card/bookCard/bookCard';

interface BookCardListProps {
  horizontal?: boolean;
  books: Book[];

  showCartAddButton?: boolean;
  showCartRemoveButton?: boolean;
  showPayButton?: boolean;
}

export default function bookCardList(props: BookCardListProps) {
  // console.log(
  //   `bookCardList: %O, will load?: %O`,
  //   props.books,
  //   props.books.length > 0
  // );

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
              showCartAddButton={props.showCartAddButton}
              showCartRemoveButton={props.showCartRemoveButton}
              showPayButton={props.showPayButton}
              book={item}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    // flex: 1,
    width: '100%',
  },
});
