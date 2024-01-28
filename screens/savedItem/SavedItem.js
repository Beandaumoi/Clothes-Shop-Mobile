import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import {colors, icons} from '../../constants';
import { UIHeader } from '../../components';
import AllItems from './AllItems';
import Boards from './Boards';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
const FirstRoute = () => <AllItems />;

const SecondRoute = () => <Boards />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function SavedItem() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'All Items'},
    {key: 'second', title: 'Boards'},
  ]);
  const renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled={false}
      indicatorStyle={{
        backgroundColor: colors.primary,
      }}
      style={{backgroundColor: colors.white}}
      renderLabel={({route, focused, color}) => (
        <Text
          style={[
            styles.headTitle,
            {color: focused ? colors.primary : colors.inactive},
          ]}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View style={styles.container}>
      <UIHeader
        title={'Saved Item'}
      />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.white,
  },
  headTitle: {
    alignSelf: 'center',
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '600',
    marginTop: 3,
  },
  line: {
    top: 37,
    position: 'absolute',
    height: 5,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
});
