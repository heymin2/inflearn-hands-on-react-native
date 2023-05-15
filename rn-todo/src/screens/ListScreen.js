import { useEffect, useState } from 'react';
import EmptyList from '../components/EmptyList';
import InputFAB from '../components/InputFAB';
import List from '../components/List';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import { Alert, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const ListScreen = () => {
  const [todos, setTodos] = useState([]);
  const [isBottom, setIsBottom] = useState(false);
  const { bottom } = useSafeAreaInsets();
  const { getItem, setItem } = useAsyncStorage('todos');

  const save = async (data) => {
    try {
      await setItem(JSON.stringify(data));
      setTodos(data);
    } catch (e) {
      Alert.alert('저장 실패');
    }
  };

  const load = async () => {
    try {
      const data = await getItem();
      const todos = JSON.parse(data || '[]'); // 배열 형태로 변경
      setTodos(todos);
    } catch (e) {
      Alert.alert('불러오기 실패');
    }
  };

  useEffect(() => {
    load();
  }, []);

  const onInsert = (task) => {
    const id = nanoid();
    const newTask = { id, task, isDone: false };
    save([newTask, ...todos]);
    setTodos((prev) => [newTask, ...prev]);
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    save(newTodos);
  };

  const onToggle = (id) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    save(newTodos);
  };

  return (
    <View style={{ paddingBottom: bottom, flex: 1 }}>
      {todos.length ? (
        <List
          data={todos}
          setIsBottom={setIsBottom}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ) : (
        <EmptyList />
      )}
      <InputFAB onInsert={onInsert} isBottom={isBottom} />
    </View>
  );
};

export default ListScreen;
