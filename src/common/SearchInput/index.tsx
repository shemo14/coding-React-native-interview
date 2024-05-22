import React, {useState} from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import {Search} from '../../assets/svg';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../app/reduxHooks.ts';
import {getMoviesSearch} from '../../features/movies/requests.ts';
import SearchItem from '../SearchItem';

const SearchInput = () => {
  const {colors} = useTheme();
  const [search, setSearch] = useState<string>('');
  const height = useSharedValue(0);
  const dispatch = useAppDispatch();
  const searchResponse = useAppSelector(state => state.movies.searchResponse);

  const searchHandler = (val: string) => {
    setSearch(val);
    dispatch(getMoviesSearch(val));
    if (val.length > 3) {
      height.value = withSpring(height.value + 300);
    }

    if (val.length === 0) {
      height.value = withSpring(0);
    }
  };

  return (
    <View style={{zIndex: 1}}>
      <View
        style={{
          width: '100%',
          height: 40,
          flexDirection: 'row',
          padding: 10,
          borderWidth: 1,
          borderColor: colors.grey,
          marginBottom: 10,
        }}>
        <TextInput
          placeholder={'Search ....'}
          placeholderTextColor={colors.black}
          onChangeText={searchHandler}
          value={search}
          style={{
            flex: 1,
            height: '100%',
            color: colors.black,
          }}
        />
        <Search width={20} height={20} fill={colors.black} />
      </View>
      <Animated.View
        style={{
          width: '100%',
          height,
          backgroundColor: colors.white,
          position: 'absolute',
          top: 40,
          paddingVertical: 15,
        }}>
        <ScrollView>
          {searchResponse?.results.map(movie => (
            <SearchItem movie={movie} />
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default SearchInput;
