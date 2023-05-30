import styled from '@emotion/styled'

export const TransactionHistoryTable = styled.table`
  border-collapse: collapse;  
  border: 1px solid silver;
  width: 600px;
  margin: 40px  auto;
  padding: 5px;
  background-color: #f8f4ef; 
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15); 
`
export const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #d4d4d4;
  background-color: #f19aa1;
`
export const TableData = styled.td`
  padding: 8px;
  text-align: center;
  border: 1px solid #d4d4d4;
`
export const TableRow = styled.tr`
:nth-of-type(even) {
  background-color: #ffffff;
}
`
