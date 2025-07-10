"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = greet;
// src/module.ts
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("TypeScript"));
