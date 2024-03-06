let sharedData;

export const shareData = (data) => {
  sharedData = data;
};

export const getData = () => {
  return sharedData;
};
