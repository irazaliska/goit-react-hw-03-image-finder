import styled from '@emotion/styled'

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const Item = styled.li`
  display: flex;
  align-items: center;  
  gap: 10px;
  width: 330px;
  margin: 0 auto;
  padding: 10px;
  background-color: #f8f4ef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 20px;
  background-color: ${props => (props.isOnline ? '#4f8d4f' : '#ca2020')};
`
export const Avatar = styled.img`
  width: 40px;
`
export const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
`

