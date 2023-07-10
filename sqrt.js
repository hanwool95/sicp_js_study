//Newton's method
function sqrt(target) {
    console.log(target);
    return sqrt_iter(1, target);
}
function sqrt_iter(guess, target) {
    return is_good_enough(guess, target)
        ? guess
        : sqrt_iter(improve(guess, target), target);
}
function improve(guess, target) {
    return average(guess, target / guess);
}
function is_good_enough(guess, target) {
    return abs(square(guess) - target) < 0.001;
}
function square(x) {
    return x * x;
}
function abs(x) {
    return x > -0 ? x : -x;
}
function average(x, y) {
    return (x + y) / 2;
}
console.log(sqrt(9));
