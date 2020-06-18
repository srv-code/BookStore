import { StyleSheet } from 'react-native';

export const colorSet = [
  'brown',
  'blueviolet',
  'cadetblue',
  'yellowgreen',
  'chocolate',
  'coral',
  'cornflowerblue',
  'darkblue',
  'darkgoldenrod',
  'darkcyan',
  'dodgerblue',
];

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',

    // alignItems: 'center',
    // justifyContent: 'center',

    // borderColor: 'blue',
    // borderWidth: 2,
  },
  topGenreHeader: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  topGenreHeaderText: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    marginVertical: 10,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const defaultNavigationOptions = {
  headerTintColor: '#444',
  headerStyle: { backgroundColor: '#eee', height: 80 },
};
