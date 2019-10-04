import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding-top: 0px;
`;

export const Div = styled.div`
  margin-bottom: 50px;
  color: #003569;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    font-size: 50px;
  }

  .icon:hover {
    transition: all 0.2s;
    transform: translateY(-5px);
  }
  span {
    font-weight: 600;
    font-size: 16px;
    text-align: center;
  }
`;

export const Article = styled.article`
  header {
    display: flex;
  }
`;
