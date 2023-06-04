import styled from "styled-components";

export const PageNumberButton = styled.button`
  width: 40px;
  height: 25px;
  background: rgb(88, 14, 162);
  border-radius: 5px;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings: "pnum", "lnum";
  color: rgb(250, 250, 250);
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  margin-left: 2px;
  :hover {
    background: #3f007d;
  }
  :active {
    background: #271a58;
  }
  :focus{
    background: red;
  }
`;
export const Paginate = styled.div`
  padding-top: 20px;
`;
