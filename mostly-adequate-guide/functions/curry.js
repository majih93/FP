// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
export function curry(fn) {
  // arity = number of expected arguments
  const arity = fn.length;

  return function $curry(...args) {
    console.log("args, ", args);
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}

// Arity is a term used in computer science and mathematics to describe the number of arguments or operands that a function or operation takes. The arity of a function indicates how many parameters or inputs it can accept. The word "arity" is derived from the Latin word "āritās," meaning "number."
