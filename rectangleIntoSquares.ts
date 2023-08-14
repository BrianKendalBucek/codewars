export const sqInRect = (length: number, width: number): null | number[] => {
  const result: any = [];
  let w = length > width ? width : length;
  let l = length > width ? length : width;

  if (l === w) {
    return null;
  }

  const remaining = (h: number, j: number): number => {
    return h - j * Math.floor(h / j);
  };
  
  const recursion = (l: number, w: number): any => {
    if (w === 0) {
      return;
    }
    
    if (l) {
      for (let i = 0; i < Math.floor(w / l); i++) {
        result.push(l);
      }
    }
    
    if (w) {
      for (let i = 0; i < Math.floor(l / w); i++) {
        result.push(w);
      }
    }
  };

  if (w) {
    recursion(l, w);
    l = remaining(l, w);
  }

  if (l) {
    recursion(w, l);
    w = remaining(w, l);
  }

  if (w) {
    recursion(l, w);
    l = remaining(l, w);
  }

  if (l) {
    recursion(w, l);
    w = remaining(w, l);
  }

  if (w) {
    recursion(l, w);
    l = remaining(l, w);
  }
  
    if (l) {
    recursion(w, l);
    w = remaining(w, l);
  }

  if (w) {
    recursion(l, w);
    l = remaining(l, w);
  }

  if (l) {
    recursion(w, l);
    w = remaining(w, l);
  }

  if (w) {
    recursion(l, w);
    l = remaining(l, w);
  }
  
    if (l) {
    recursion(w, l);
    w = remaining(w, l);
  }

  if (w) {
    recursion(l, w);
    l = remaining(l, w);
  }

  if (l) {
    recursion(w, l);
    w = remaining(w, l);
  }

  if (w) {
    recursion(l, w);
    l = remaining(l, w);
  }

  console.log(result);
  return result;
};