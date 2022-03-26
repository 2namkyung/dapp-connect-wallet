import styled from "styled-components";

export const StyledWallet = styled.div`
  width:50%;
  margin:10px auto;
  text-align:center;
  border:1px solid blue;
  border-radius: 10px;

  span{
    margin-left:10px;
    font-size:1.8rem;
    font-weight:700;
  }

  &:hover{
    cursor:pointer;
    color:red;
    box-shadow: 0 0 15px blue;
  }
`

export const StyledWalletInfo = styled.div`
  width:50%;
  margin:0 auto;
  text-align:center;
`