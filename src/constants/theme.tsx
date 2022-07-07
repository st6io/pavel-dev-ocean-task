//             0  1  2   3   4   5   6
const space = [0, 5, 10, 15, 20, 25, 30];

export const theme = {
  colors: {
    font: '#6b6a7a',
    heading: '#2f2e43',
    tableLabel: 'purple',
    tableRowHover: '#f0f0f0',
    sectionRowBackground: '#f7f7f7',
    tableRow: 'white',
    nearbyPlacesContainerBackground: 'white',
  },
  space,
  spacePx: space.map((v) => `${v}px`),
  //          0       1       2
  fontSize: ['14px', '16px', '24px'],
  //            0       1
  lineHeight: ['20px', '22px'],
};
