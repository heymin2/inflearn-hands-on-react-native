import { StyleSheet, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import { GRAY } from '../color';

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const List = ({ data }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <ListItem item={item} />}
      windowSize={5} // 이전 :2, 현재:1, 다음: 2
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={View}
      ListHeaderComponentStyle={{ height: 10 }}
    />
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default List;
