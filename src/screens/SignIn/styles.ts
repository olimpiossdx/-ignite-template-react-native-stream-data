import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { MotiView } from 'moti';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(MotiView)`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})`
  flex: 1;
  background-color: ${props => props.theme.colors.black};
`;

export const LoginBanner = styled.View`
  flex: 1;
  width: 100%;

  background-color: ${props => props.theme.colors.purple};
  padding: ${getStatusBarHeight(true) + 60}px ${RFValue(40)}px ${RFValue(60)}px;
`;

export const LoginInfo = styled.View`
  flex: 1;
  width: 100%;
  padding: ${RFValue(48)}px ${RFValue(32)}px ${getBottomSpace() + 48}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Partner = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${props => props.theme.colors.gray};
`;

export const Description = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  margin-top: ${RFValue(48)}px;;

  font-size: ${RFValue(25)}px; 
  color: ${props => props.theme.colors.white};
`;

export const SignInButton = styled(RectButton)`
  margin-top: ${RFValue(40)}px;

  background-color: ${props => props.theme.colors.purple};
  justify-content: center;
  align-items: center;
  flex-direction: row;

  border-radius: ${RFValue(5)}px;
`;

export const SignInButtonIcon = styled.View`
  padding: ${RFValue(18)}px ${RFValue(16)}px;
  background-color: ${props => props.theme.colors.purple_darker};
  border-top-left-radius: ${RFValue(5)}px;
  border-bottom-left-radius: ${RFValue(5)}px;
`;

export const SignInButtonText = styled.Text`
  flex: 1;
  color: ${props => props.theme.colors.white};
  font-size: ${RFValue(15)}px;
  font-family: ${props => props.theme.fonts.regular};
  text-align: center;
`;
