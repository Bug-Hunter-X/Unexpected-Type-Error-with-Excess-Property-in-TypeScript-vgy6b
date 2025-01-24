# Unexpected Type Error with Excess Property in TypeScript

This repository demonstrates a common TypeScript error related to excess properties in object literals when passed to functions expecting specific interfaces.

## Bug Description
The TypeScript compiler will throw an error when an object literal contains more properties than expected by the function's parameter type. Even if the extra properties are not used, the compiler will consider the object type mismatch.

## How to Reproduce
1. Clone this repository.
2. Open `bug.ts` and examine the `printCoordinates` function and the `obj` object. 
3. Try compiling the code using the TypeScript compiler (`tsc bug.ts`).
4. Observe the compilation error, indicating type mismatch.

## Solution
The `bugSolution.ts` file demonstrates the fix for this error. By explicitly defining a type that allows excess properties, this issue is avoided.

## Additional Notes
This is a common pitfall in TypeScript, highlighting the strictness of its type system, but this also ensures improved code quality and error detection during development.
