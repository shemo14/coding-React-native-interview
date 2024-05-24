import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import {Container, Text, SwitchBox} from '../../common';
import {useTheme} from '@react-navigation/native';
import {Genres} from '../../components';
import {screens} from '../../navigation/ScreensEnum';

const Search = props => {
  const {colors} = useTheme();
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [includeAdult, setIncludeAdult] = useState<boolean>(false);
  const [includeVideo, setIncludeVideo] = useState<boolean>(false);
  const [year, setYear] = useState<string>('');
  const {navigation} = props;

  const onFilter = () => {
    const query = `?include_adult=${includeAdult}&include_video=${includeVideo}&with_genres=${selectedGenres.toString()}&primary_release_year=${year}`;
    navigation.navigate(screens.SearchResult, {query});
  };

  return (
    <Container>
      <View style={{flex: 1}}>
        <Genres onSelectGenres={setSelectedGenres} />
        <SwitchBox
          onValueChange={setIncludeAdult}
          label={'Include Adult'}
          value={includeAdult}
        />
        <SwitchBox
          label={'Include Video'}
          onValueChange={setIncludeVideo}
          value={includeVideo}
        />
        <View>
          <Text type={'p2'} style={{color: colors.black, marginBottom: 10}}>
            Release Year
          </Text>
          <View
            style={{
              width: '100%',
              height: 40,
              padding: 10,
              borderColor: colors.grey,
              borderWidth: 1,
            }}>
            <TextInput
              placeholder={'Set release year ...'}
              placeholderTextColor={colors.black}
              value={year}
              onChangeText={setYear}
              style={{color: colors.black, width: '100%', height: '100%'}}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => onFilter()}
        style={{
          width: '70%',
          height: 45,
          backgroundColor: colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text type={'p2'} style={{color: colors.black}}>
          Filter
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Search;
