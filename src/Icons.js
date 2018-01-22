import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { GRAY as DEFAULT } from "./Constants";

const BaseIcon = props => {
  let { name, size = 30, color = DEFAULT, ...otherProps } = props;
  return <Icon name={name} size={size} color={color} {...otherProps} />;
};
export const FilterIcon = props => <BaseIcon name="filter-list" {...props} />;
export const FavoriteIcon = props => <BaseIcon name="favorite" {...props} />;
export const StarIcon = props => <BaseIcon name="star-rate" {...props} />;
export const TickIcon = props => <BaseIcon name="done" {...props} />;
export const CloseIcon = props => <BaseIcon name="close" {...props} />;
