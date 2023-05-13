import { memo } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

const ListItem = memo(({ item }) => {
  console.log(item.id);
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
      <Text style={{ fontSize: 20 }}>{item.task}</Text>
    </View>
  );
});

const ListScreen = () => {
  const todos = [];
  for (let i = 1; i < 501; i++) {
    todos.push({ id: i, task: `task ${i}` });
  }

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <ListItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      windowSize={5} // 이전 :2, 현재:1, 다음: 2
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default ListScreen;
