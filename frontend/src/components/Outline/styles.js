import styled, { css } from "styled-components";

export const Container = styled.div`
  ${props =>
    props.info &&
    css`
      margin: 44px 75px;
      display: flex;
      flex-direction: row;
      margin-bottom: 44px;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;

      .avatar {
        flex-basis: 0;
        -webkit-box-flex: 1;
        flex-grow: 1;
      }

      section {
        flex-basis: 30px;
        -webkit-box-flex: 2;
        flex-grow: 2;
        color: #262626;
        flex-shrink: 1;
        min-width: 0;
      }

      section .infoP {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        flex-shrink: 1;
        margin-top: 30px;
        margin-bottom: 20px;
      }

      section .infoP h3 {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 28px;
        line-height: 32px;
        margin: -5px 0 -6px;
        font-weight: 300;
      }

      section .infoP button {
        flex-shrink: 0;
        margin-left: 20px;
        padding: 6px;
        background: #fafafa;
        border: 1px solid rgba(0, 0, 0, 0.0975);
        display: block;
        color: #003569;
        font-weight: 600;
        font-size: 13px;
        border-radius: 4px;
      }

      section ul {
        display: flex;
        margin-bottom: 20px;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        list-style: none;
      }

      section ul li {
        margin-left: 0;
        font-size: 16px;
        margin-right: 40px;
      }

      section .infoB {
        font-size: 16px;
        line-height: 24px;
        word-wrap: break-word;
        display: block;
      }

      section .infoB h3 {
        font-size: 18px;
        font-weight: 600;
      }
    `}
  ${props =>
    props.content &&
    css`
      display: flex;
      flex-direction: column;
      padding-bottom: 0px;
      padding-top: 0px;

      article div {
        display: flex;
        justify-content: center;
        flex-direction: row;
        margin: 28px 0;
        padding: 0;
      }

      article div div {
        background: green;
        display: flex;
        justify-content: center;
        height: 300px;
        margin: 0 auto;
        margin-right: 28px;
        display: block;
        position: relative;
        width: 100%;
        flex: 1 0 0%;
      }
      article div div:last-child {
        margin-right: 0;
      }
    `}
`;
