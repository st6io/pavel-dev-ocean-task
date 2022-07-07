import '@testing-library/jest-dom';

export const skeletonSelector = 'span.react-loading-skeleton';

// Hacky select, inspired by react-loading-skeleton tests
// https://github.com/dvtng/react-loading-skeleton/blob/master/src/__tests__/__helpers__/index.ts#L5
export const getAllSkeletons = (): HTMLElement[] =>
  Array.from(document.querySelectorAll<HTMLElement>(skeletonSelector));
