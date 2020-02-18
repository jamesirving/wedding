const fontSize = [
    '72px', // 0
    '50px', // 1
    '36px', // 2
    '30px', // 3
    '28px', // 4
    '24px', // 5
    '22px', // 6
    '20px', // 7
    '18px', // 8
    '16px', // 9
    '14px', // 10
    '12px', // 11
  ];
  
  const headingSize = {
    L1MxSx: fontSize[0], // 72px
    L2M1Sx: fontSize[1], // 50px
    L3M2S1: fontSize[2], // 36px
    LxM3S2: fontSize[4], // 28px
    LxMxS3: fontSize[6], // 22px
  };
  
  const bodySize = {
    L1MxSx: fontSize[7], // 20px
    L2M1Sx: fontSize[8], // 18px
    L3M2S1: fontSize[9], // 16px
    LxM3S2: fontSize[10], // 14px
    LxMxS3: fontSize[11], // 12px
  };
  
  export { fontSize, headingSize, bodySize };