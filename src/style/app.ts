import styled from "styled-components";

export const Page = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ScrollBox = styled.section`
  width: 300px;
  height: 300px;
  overflow-y: auto;
  scroll-snap-type: y
    ${({ mandatory }: { mandatory: boolean }) => mandatory && "mandatory"};
`;

export const ItemBox = styled.div`
  width: 300px;
  height: 100%;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  scroll-snap-align: center;

  background-image: url(${({ img }: { img: string }) => img});
`;
