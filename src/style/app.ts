import styled from "styled-components";

export const Page = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ScrollBox = styled.section`
  width: 300px;
  height: 300px;

  overflow-y: auto;
`;

export const ItemBox = styled.div`
  width: 300px;
  height: 100%;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  background-image: url(${({ img }: { img: string }) => img});
`;
