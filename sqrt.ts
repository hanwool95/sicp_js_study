//Newton's method

function sqrt(target) {
    return sqrt_iter(1, target)
}

function sqrt_iter(guess: number, target: number): number {
    return is_good_enough(guess, target)
            ? guess
            : sqrt_iter(improve(guess, target), target)
}

function improve(guess: number, target: number): number {
    return average(guess, target / guess)
}

function is_good_enough(guess: number, target: number): boolean {
    return abs(square(guess) - target) < 0.001
}

function square(x: number): number {
    return x * x
}

function abs(x: number): number {
    return x >- 0 ? x : -x
}

function average(x: number, y: number): number {
    return (x + y) / 2
}

console.log(sqrt(9))