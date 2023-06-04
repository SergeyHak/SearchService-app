import styled from "styled-components";
export const Content = styled.div`
  width: 1200px;
  height: 860px;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const UserInfoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const UserName = styled.h4`
padding-top: 15px;
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
  margin-top: 15px;
  
  :hover {
    background: #3f007d;
  }
  :active {
    background: #271a58;
  }
`;