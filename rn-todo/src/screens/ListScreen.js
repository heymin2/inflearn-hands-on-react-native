import { FlatList } from 'react-native';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

const ListScreen = () => {
  const todos = [];
  for (let i = 1; i < 501; i++) {
    todos.push({ id: i, task: `task ${i}` });
  }

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => {
        console.log(item.id);
        return (
          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <Text style={{ fontSize: 20 }}>{item.task}</Text>
          </View>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
    />
    // <ScrollView style={styles.container}>
    //   {todos.map((item) => {
    //     console.log(item.id);
    //     return (
    //       <View
    //         key={item.id}
    //         style={{ paddingHorizontal: 20, paddingVertical: 10 }}
    //       >
    //         <Text style={{ fontSize: 20 }}>{item.task}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default ListScreen;
