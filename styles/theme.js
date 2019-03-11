const red = '#fc5c3c';
const orange = '#ffb638';
const gradientAngle = 155;
const bluewood = '#313b53';
const ebonyClay = '#213037';

const linearGradient = (c1, c2, angle) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  `linear-gradient( ${angle}deg, ${c1} 0%, ${c2} 100%)`;

export default {
  primary: '#6e27c5',
  background: `linear-gradient(135deg, ${bluewood} 0%,${ebonyClay} 100%)`,
  borderGradient: `${linearGradient(red, orange, gradientAngle)} 1 round`,
  bgGradient: `${linearGradient(red, orange, gradientAngle)}`,
};
