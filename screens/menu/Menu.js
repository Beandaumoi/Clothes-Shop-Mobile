import * as React from 'react';
import {View, useWindowDimensions, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {UIHeader} from '../../components';
import {colors, icons} from '../../constants';
import Women from './Women';
import Men from './Men';
const FirstRoute = () => <Women />;

const SecondRoute = () => <Men />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Women'},
    {key: 'second', title: 'Men'},
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
        iconLeft={icons.back}
        iconRight1={icons.bell}
        iconRight2={icons.bag}
        title={'Category'}
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
