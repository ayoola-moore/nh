import styled from "styled-components";

export const NewsWrapper = styled.section`
  background-color: #f6f6ef;
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const NewsHeader = styled.header`
  background-color: #ff6600;
  padding: 10px;
  margin: 5px 0;
  font-weight: bold;
`;

export const NewTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;

  a {
    color: #2e2e2c;
    text-decoration: none;
  }
`;

export const NewsMeta = styled.div`
  font-style: italic;

  > span:first-child {
    margin-right: 10px;
  }

  > span:not(:first-child):before {
    content: '•'
    margin: 0 7px;
  }

  .story__meta-bold {
    font-weight: bold;
  }
`;

export const NewMetaElement = styled.span`
  font-weight: bold;
  color: ${props => props.color};
`;

export const FeedsContainerWrapper = styled.main`
  max-width: 1140px;
  padding: 20px 15px 25%;
  margin: auto;
`;
