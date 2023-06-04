import styled from "styled-components";
export const SearchInput = styled.input`
  height: 20px;
  width: 200px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
`;
export const SearchBlockDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const Content = styled.div`
  width: 1200px;
  height: 860px;
  margin-top: 200px;
`;
export const SortResultDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
`;
export const SearchButton = styled.button`
  width: 150px;
  height: 30px;
  left: 140px;
  top: 1268px;
  background: #580ea2;
  border-radius: 46px;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #fafafa;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
`;
export const SortDiv = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;
export const SortContent = styled.div`
`;
export const ResultDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PrevNextButtons = styled.div`
  display: flex;
  column-gap: 50px;
  padding-top: 20px;
  display: none;
`;
export const RewindButton = styled.button`
  width: 50px;
  height: 30px;
  background: rgb(88, 14, 162);
  border-radius: 5px;
  font-weight: 400;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings: "pnum", "lnum";
  color: rgb(250, 250, 250);
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  margin-left: 20px;
  
  :hover {
    background: #3f007d;
  }
  :active {
    background: #271a58;
  }
`;
export const SortSpan = styled.span`
cursor: pointer;
:hover {
    color: #3f007d;
  }
  :focus {
    color: #271a58;
  }
`;
export const LoaderDiv = styled.div`
display: flex;
align-items: center;
gap: 10px;
display: none;
`;
export const LoaderSpan = styled.span`
font-size: 22px;
`;
export const LoginU = styled.h4`
cursor: pointer;
`;
export const ErrorDiv = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  color: red;
`;