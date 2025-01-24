function printCoordinates(coord: { x: number; y: number; }) {
  console.log(`Coordinates: (${coord.x}, ${coord.y})`)
}

const obj = { x: 10, y: 20, z: 30 };
printCoordinates(obj); // This will cause a compilation error