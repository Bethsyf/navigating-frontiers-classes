let suma = 0;
console.time('bucle');
for (let i = 0; i < 1000000; i++) {
  suma + -1;
}
console.timeEnd('bucle');
