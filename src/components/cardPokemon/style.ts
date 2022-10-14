import styled from "styled-components";
export const ContainerCard = styled.article`
  box-sizing: border-box;
  width: 380px;
  height: 120px;
  background-color: ${({ color }) => color};
  padding: 10px;
  display: flex;
  border-radius: 10px;
`;
export const Information = styled.section`
  width: 60%;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
export const Image = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    width: 135px;
    position: absolute;
    top: -40%;
    height: 135px;
  }
`;
export const Background = styled.div`
  height: 90px;
  width: 90px;
  filter: blur(30px);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
`;
export const Id = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.1em;
  font-weight: bold;
  font-family: "Poppins", monospace;
`;

export const Name = styled.p`
  font-size: 1.5em;
  color: white;
  font-family: "Poppins", monospace;
`;

export const Types = styled.p`
  display: flex;
  gap: 5px;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 800px) {
    width: 90%;
    @media (max-width: 1000px) {
      width: 90%;
    }
  }
`;
