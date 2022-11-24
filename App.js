import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'The Fast and Furious',
    description: 'The Fast and the Furious',
  },
  {
    id: 2,
    title: '2 Fast 2 Furious',
    description: 'How fast do you like it ?',
  },
];

const Item = ({title, description}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const App = () => {
  const renderItem = ({item}) => (
    <Item title={item.title} description={item.description} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color: '#fff',
    fontSize: 32,
  },
  description: {
    color: '#fff',
    fontSize: 24,
  },
});

export default App;
