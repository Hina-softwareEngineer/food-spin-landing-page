import { CircleCompStyled } from './circleCompStyles';

export function MainCircleCompDesign({ color, imagesArray, currentBigImageAnimation, currentImage, currentSmallImageAnimation}) {
  return (
    <CircleCompStyled color={color}>
      <div className='overall-circle-box'>
        <div className='focus-selected-image'>
          <img
            ref={currentBigImageAnimation.ref}
            style={{ position: 'absolute', top: '130px', left: '170px' }}
            src={imagesArray[currentImage]}
            alt=''
          />
        </div>
        <div className='circular-images-box'>
          <div className='circular-wrapper-box' ref={currentSmallImageAnimation.ref}>
            <div className='circle-images-applied'>
              {imagesArray.map((num, i) => (
                <img
                  key={i}
                  src={num}
                  alt=''
                  style={{
                    position: 'absolute',
                    top: `${
                      280 - Math.round(280 * Math.sin(36 * (Math.PI / 180) * i))
                    }px`,
                    left: `${
                      280 + Math.round(280 * Math.cos(36 * (Math.PI / 180) * i))
                    }px`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </CircleCompStyled>
  );
}
