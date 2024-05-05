import React from 'react';
import { RouteProp } from '@react-navigation/native';

import { DetailedTwitt } from '../components/detailedTwitt';
import { StackNavigatorParamlist } from './types';


export const Details = (props) => {
  return <DetailedTwitt {...props.route.params} />;
};