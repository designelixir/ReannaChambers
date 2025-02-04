import gsap from 'gsap';

export const flipCard = (cardElement: HTMLElement, isFlipped: boolean) => {
  const timeline = gsap.timeline();

  timeline
    .to(cardElement, {
      duration: 0.6,
      rotationY: isFlipped ? 180 : 0,
      ease: 'power2.inOut',
    })
    .set(cardElement, {
      zIndex: isFlipped ? 1 : 0,
    }); 
};
