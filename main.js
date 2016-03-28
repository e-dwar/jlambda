
vrai = function (x, y) {
    return x;
};

faux = function (x, y) {
    return y;
};

cond = function (x, y, z) {
    return x(y, z);
};

et = function (p, q) {
    return cond(p, q, faux);
};

ou = function (p, q) {
    return cond(p, vrai, q);
};

non = function (x) {
    return cond(x, faux, vrai);
};

deux = function (f, x) {
    return f(f(x));
};

