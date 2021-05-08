import { useState } from 'react';
import { LandingPageWrapper, ContentBoxStyled } from './LandingPageStyles';
import useWebAnimations from '@wellyshen/use-web-animations';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';
import Image4 from '../assets/image4.png';
import Image5 from '../assets/image5.png';
import { Navbar } from '../components/Navbar';
import { ButtonPrimary } from '../components/Button';
import { MainCircleCompDesign } from '../components/MainCircleComp';
import { ArrowControls} from '../components/ArrowsChangeImage';

function LandingPage() {
  const contentArray = [
    {
      price: '$32',
      title: 'Green Goddess Chicken Salad',
      excerpt:
        'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery. ',
      color: '#FF922C',
    },
    {
      price: '$35',
      title: 'Asian Cucumber Salad',
      excerpt:
        'Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!',
      color: '#54BF29',
    },
    {
      price: '$32',
      title: 'Green Goddess Chicken Salad',
      excerpt:
        'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery. ',
      color: '#FF922C',
    },
  ];
    const imagesArray = [
      Image4,
      Image1,
      Image2,
      Image3,
      Image5,
      Image4,
      Image1,
      Image2,
      Image3,
      Image5,
    ];
  const [selectedData, setSelectedData] = useState(contentArray[0]);
  const [contentIndex, setContentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(3);
  const [currentRotationDeg, setCurrentRotationDeg] = useState(18);

  const currentSmallImageAnimation = useWebAnimations({
    keyframes: { transform: [`rotateZ(${currentRotationDeg}deg)`] },
    animationOptions: {
      duration: 750,
      fill: 'forwards',
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
  });
  const currentBigImageAnimation = useWebAnimations({
    keyframes: {
      transform: [
        `scale(0.5) rotate(0deg)`,
        `scale(0.8) rotate(20deg)`,
        `scale(1) rotate(0deg)`,
      ],
      opacity:[0.3,0.8,1]
    },
    animationOptions: {
      duration: 1000,
      fill: 'forwards',
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
  });
    const currentContentAnimation = useWebAnimations({
      keyframes: {
        transform: [`scaleX(0.2)`, `scaleX(0.3)`, `scaleX(0.6)`, `scaleX(1)`],
        opacity: [0.5, 0.2, 0.5, 1],
        transformOrigin: ['left'],
      },
      animationOptions: {
        duration: 250,
        fill: 'forwards',
        easing: 'ease-in-out',
      },
    });
  
  
  const onLeftClickArrow = () => { 
    if (contentIndex > 0) {
      setContentIndex(contentIndex - 1);
      setSelectedData(contentArray[contentIndex - 1]);
      setCurrentImage(currentImage + 1);
      currentSmallImageAnimation.getAnimation().play();
      currentBigImageAnimation.getAnimation().play();
      currentContentAnimation.getAnimation().play();
      setCurrentRotationDeg(currentRotationDeg + 36);
    }
  }
  const onRightClickArrow = () => {
     if (contentIndex < 2) {
       setContentIndex(contentIndex + 1);
       setSelectedData(contentArray[contentIndex + 1]);
       setCurrentImage(currentImage - 1);
       currentSmallImageAnimation.getAnimation().play();
       currentBigImageAnimation.getAnimation().play();
       currentContentAnimation.getAnimation().play();
       setCurrentRotationDeg(currentRotationDeg - 36);
     }
  };
  
    return (
      <LandingPageWrapper>
        <MainCircleCompDesign color={selectedData.color} imagesArray={imagesArray} currentBigImageAnimation={currentBigImageAnimation} currentImage={currentImage} currentSmallImageAnimation={currentSmallImageAnimation} />
        <Navbar />
        <ContentBoxStyled ref={currentContentAnimation.ref} color={selectedData.color}>
          <h1>{selectedData.price}</h1>
          <h2>{selectedData.title}</h2>
          <p>{selectedData.excerpt}</p>
          <ButtonPrimary color={selectedData.color} text="Order Now" />
        </ContentBoxStyled>
        <ArrowControls color={selectedData.color} onClickRight={onRightClickArrow} OnClickLeft={onLeftClickArrow} />
      </LandingPageWrapper>
    );
}

export default LandingPage;