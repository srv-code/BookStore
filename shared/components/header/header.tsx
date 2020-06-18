import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
import { Icon } from 'native-base';

interface HeaderProps {
  title: string;
  iconName: string;
  navigation: any;
}

export default function header(props: HeaderProps) {
  const openMenu = () => {
    props.navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      {/* <MaterialIcons
        name='menu'
        size={28}
        onPress={openMenu}
        style={styles.icon}
      /> */}

      <Icon
        ios='ios-menu'
        android='md-menu'
        fontSize={28}
        
        style={{ position: 'absolute', left: 16, color: 'gray' }}
        onPress={openMenu}
      />

      <Icon style={styles.headerImage} name={props.iconName} />

      {/* <Image
        source={require('../../../assets/images/app-logo.gif')}
        style={styles.headerImage}
      /> */}
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    // color: '#333',
    letterSpacing: 1,
    color: 'gray',
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    // width: 32,
    // height: 32,
    marginRight: 10,
    color: 'gray'
  },
});
