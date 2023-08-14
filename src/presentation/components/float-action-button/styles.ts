import styled from 'styled-components/native';

export const FAB = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
  border-radius: 200px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 20px;
  right: 20px;
`;
