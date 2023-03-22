import styled from 'styled-components';

export const Title = styled.h3`
  text-align: center;
`;

export const CastList = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;
export const CastItem = styled.li`
  width: 120px;
  list-style: none;

  transition: transform 100ms linear;
  transition: color 100ms linear;

  &:focus,
  &:hover {
    transform: scale(1.02);
    color: darkred;
    background-color: #00000014;
  }
`;
export const CastName = styled.p`
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: 500;
  text-align: center;
`;
export const CastCharacter = styled.p`
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: 500;
  text-align: center;
`;

export const ImageCast = styled.img`
  width: 120px;
`;
