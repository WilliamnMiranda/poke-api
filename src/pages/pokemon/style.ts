import styled from "styled-components";
interface Progress {
  tam: string;
}
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  @media (max-width: 1800px) {
    overflow: auto;
  }

  @media (max-width: 1000px) {
    min-height: 100vh;
  }
`;
export const ContainerPokemon = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70vh;
  @media (max-width: 1800px) {
    width: 90%;
    height: 100vh;
    flex-direction: column;
  }

  @media (max-width: 900px) {
    width: 100%;
    min-height: 100%;
  }
`;

export const Image = styled.div`
  width: 50%;
  z-index: 1;
  @media (max-width: 1750px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 600px;
    height: 600px;
    @media (max-width: 1750px) {
      width: 400px;
      height: 400px;
    }
    @media (max-width: 1000px) {
      width: 220px;
      height: 220px;
    }
  }
`;
export const Infos = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  font-size: 1.5em;
  font-family: Poppins;
  h1 {
    color: white;
    font-size: 2em;
    font-family: Poppins;
    @media (max-width: 900px) {
      font-size: 1.8em;
    }
  }
  span {
    position: relative;
    top: 6%;
  }
`;
export const Background = styled.img`
  position: absolute;
  top: -7%;
  right: -110%;
  @media (max-width: 1750px) {
    right: -140%;
  }
  @media (max-width: 1500px) {
    display: none;
  }
`;

export const BackgroundPokemon = styled.div`
  height: 500px;
  width: 500px;
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  z-index: -1;
  filter: blur(200px);
  @media (max-width: 900px) {
    top: -15%;
    left: 17%;
    height: 300px;
    width: 300px;
  }
  @media (max-width: 1500px) {
    top: -3%;
    left: 20%;
    height: 300px;
    width: 300px;
  }
`;
export const Status = styled.div`
  display: flex;
  align-items: center;
`;
export const StatsPokemon = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: 1500px) {
    gap: 20px;
    margin-bottom: 5px;
  }
`;
export const NameStatus = styled.div`
  width: 15%;
  text-transform: uppercase;
  font-family: Poppins;
  @media (max-width: 900px) {
    font-size: 0.9em;
    width: 25%;
  }
`;
export const Progress = styled.div`
  width: 78%;
  height: 30px;
  @media (max-width: 900px) {
    width: 68%;
  }
`;
export const StatusProgress = styled.div<Progress>`
  width: ${({ tam }) => tam};
  height: 30px;
  background-color: white;
  border-radius: 10px;
`;

export const Value = styled.div`
  width: 7%;
  display: flex;
  justify-content: center;
  font-family: Poppins;
`;
export const Types = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 900px) {
    margin-top: 12px;
  }
`;
export const Inicio = styled.button`
  background-color: rgba(0, 0, 0, 0.4);
  height: 40px;
  width: 100px;
  border-radius: 20px;
  border: none;
  outline: none;
  color: white;
  font-weight: bold;
  a {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    p {
      position: relative;
      top: 1px;
    }
    svg {
      font-size: 1.2em;
    }
  }
  @media (max-width: 900px) {
    font-size: 0.8em;
    height: 35px;
    margin-bottom: 5px;
  }
`;
