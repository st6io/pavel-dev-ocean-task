import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      font: string;
      heading: string;
      tableLabel: string;
      tableRowHover: string;
      tableRow: string;
      nearbyPlacesContainerBackground: string;
      sectionRowBackground: string;
    };
    space: number[];
    spacePx: string[];
    fontSize: string[];
    lineHeight: string[];
  }
}
