"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqInRect = void 0;
const sqInRect = (length, width) => {
    const result = [];
    let w = length > width ? width : length;
    let l = length > width ? length : width;
    if (l === w) {
        return null;
    }
    const remaining = (h, j) => {
        return h - j * Math.floor(h / j);
    };
    const recursion = (l, w) => {
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
exports.sqInRect = sqInRect;
