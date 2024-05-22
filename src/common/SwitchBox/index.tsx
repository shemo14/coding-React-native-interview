import React, {useState} from 'react';
import {Text} from '../index.ts';
import {Switch, View, SwitchProps} from 'react-native';
import {useTheme} from '@react-navigation/native';

interface SwitchBoxProps {
  label: string;
}
const SwitchBox: React.FC<SwitchProps & SwitchBoxProps> = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const {colors} = useTheme();
  const {label} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center',
      }}>
      <Text type={'p2'} style={{color: colors.black, marginEnd: 10}}>
        {label}
      </Text>
      <Switch
        trackColor={{false: colors.grey, true: colors.primary}}
        thumbColor={colors.black}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setIsEnabled}
        value={isEnabled}
        {...props}
      />
    </View>
  );
};

export default SwitchBox;
