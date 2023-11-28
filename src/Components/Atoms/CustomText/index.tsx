import {StyleProp, Text, TextStyle} from 'react-native';
import React from 'react';
import AppTheme from '../../../Utils/AppTheme';

interface TextProps {
  textStyle?: StyleProp<TextStyle>;
  fontFamily?: string;
  color?: string | undefined;
  children: string | React.ReactElement | undefined;
}

const getStyles = (
  fontSize: number,
  lineHeight: number,
  fontFamily: string,
  color: string | undefined,
): StyleProp<TextStyle> => {
  return {
    fontSize,
    lineHeight,
    fontFamily,
    color: color,
  };
};
const Regular1012 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-Regular',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(10, 12, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};

const Regular1214 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-Regular',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(12, 14, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};
const SemiBold1012 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-SemiBold',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(10, 12, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};

const SemiBold1214 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-SemiBold',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(12, 14, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};

const Bold1214 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-Bold',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(12, 14, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};
const Regular1416 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-Regular',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(14, 16, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};

const SemiBold1420 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-SemiBold',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(14, 20, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};
const Medium1420 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-Medium',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(14, 20, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};

const Bold1416 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-Bold',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(14, 16, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};
const Regular1618 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-Regular',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[textStyle, getStyles(16, 18, fontFamily, color)]}>
      {children}
    </Text>
  );
};

const SemiBold1618 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-SemiBold',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[textStyle, getStyles(16, 18, fontFamily, color)]}>
      {children}
    </Text>
  );
};
const SemiBold2428 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-Bold',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(24, 28, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};

const Bold1618 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-Bold',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(16, 18, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};
const SemiBold1820 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-SemiBold',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(18, 20, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};
const Bold1820 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-Bold',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(18, 20, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};
const Bold2024 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-ExtraBold',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(20, 24, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};
const Bold2428 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-ExtraBold',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(24, 28, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};
const Bold2830 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-Bold',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(28, 30, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};
const Bold4458 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-Bold',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(44, 58, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};
const Medium4260 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-Medium',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(42, 54, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};
const Regular3038 = (props: TextProps) => {
  const {
    textStyle,
    fontFamily = 'Manrope-Regular',
    color = AppTheme.black,
    children = '',
  } = props;
  return (
    <Text style={[getStyles(30, 38, fontFamily, color), textStyle]}>
      {children}
    </Text>
  );
};

export {
  Regular1012,
  SemiBold1012,
  SemiBold1214,
  Regular1214,
  Bold1214,
  Medium1420,
  SemiBold1420,
  Regular1416,
  Bold1416,
  SemiBold1618,
  Regular1618,
  Bold1618,
  SemiBold1820,
  Bold1820,
  Bold2024,
  SemiBold2428,
  Bold2428,
  Bold2830,
  Regular3038,
  Bold4458,
  Medium4260
};
