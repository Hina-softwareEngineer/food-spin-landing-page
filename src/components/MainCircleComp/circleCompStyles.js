import styled from 'styled-components';

export const CircleCompStyled = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .overall-circle-box {
    position: absolute;
    width: ${(window.innerWidth * 92) / 100}px;
    height: ${(window.innerWidth * 92) / 100}px;
    right: -20%;
    top: -1000px;
    @media screen and (max-width: 1600px) {
      right: -20%;
      top: -900px;
    }

    @media screen and (max-width: 1400px) {
      top: -750px;
    }
    @media screen and (max-width: 1200px) {
      top: -650px;
      right: -20%;
    }
    @media screen and (max-width: 1000px) {
      top: -450px;
      right: -10%;
    }

    .focus-selected-image {
      position: absolute;
      width: 648.74px;
      max-width: 648px;
      left: 22%;
      top: 74%;
      padding: 44px 44px;
      height: 648px;
      z-index: 1;
      img {
        width: 291px;
        height: 297px;
        border-radius: 50%;
      }
    }

    .circular-images-box {
      position: absolute;
      width: ${(window.innerWidth * 92) / 100}px;
      height: ${(window.innerWidth * 92) / 100}px;
      right: 0;
      top: 0;
      border-radius: 50%;
      background: ${(props) =>
        props.color === '#FF922C' ? '#FFEEDE' : '#EAFFE2'};
      overflow: hidden;
    }
    .circular-wrapper-box {
      position: absolute;
      width: 648.74px;
      max-width: 648px;
      left: 22%;
      top: 74%;
      padding: 44px 44px;
      height: 648px;
      .circle-images-applied {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px dashed #e87f1e;
        img {
          border-radius: 50%;
          width: 99px;
          height: 101px;
        }
      }
    }
  }
`;
