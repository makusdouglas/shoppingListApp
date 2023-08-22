import Feather from 'react-native-vector-icons/Feather';
import * as S from './styles';
export const TopBar = () => {
  return (
    <S.TopBarContainer>
      <S.TopBarTitleContainer>
        <S.TopBarSubTitle>Bem vindo,</S.TopBarSubTitle>
        <S.TopBarTitle>DOUGLAS</S.TopBarTitle>
      </S.TopBarTitleContainer>

      <S.TopBarActionsContainer>
        {/* <S.TopBarAction>
          <Feather name="search" size={24} color="#fff" />
        </S.TopBarAction> */}
        <S.TopBarAction>
          <Feather name="user" size={24} color="#fff" />
        </S.TopBarAction>
        {/* <S.TopBarAction>
          <Feather name="settings" size={24} color="#fff" />
        </S.TopBarAction> */}
      </S.TopBarActionsContainer>
    </S.TopBarContainer>
  );
};
