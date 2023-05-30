import styled from '@emotion/styled'

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 350px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`
export const Avatar = styled.img`
  width: 150px;
  padding: 40px;
`
export const Name = styled.p`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
`
export const Tag = styled.p`
  margin-bottom: 10px;
`
export const Location = styled.p`
  margin-bottom: 40px;
`
export const Stats = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
`
export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
  padding: 10px;
  background-color: #f8f4ef;
  border-top: 1px solid #000000;
      :not(:last-child) {
            border-right: 1px solid #000000;}
`
export const Label = styled.span`
  font-size: 14px;
`
export const Quantity = styled.span`
  font-weight: 700;
`

