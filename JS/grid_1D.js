const grid_x = 10, grid_y = 7;

var grid = new Array(grid_x * grid_y);
/*
var grid = [];
for (let y = 0; y < grid_y; y++) {
    grid.push([]);
    for (let x = 0; x < grid_x; x++) {
        grid[y].push(x);
        console.log (`Coordinates (${y}, ${x})`);
    }
}
*/
console.log (`Y size is (${grid.length}), X size is (${grid[0].length}).`
            +"\nRemember: Coordinates start at (0,0)!\n"
            +"\nYou can type GetIndex(#,#) in the console to return an index value from coordinates."
            +"\n\nYou can type GetCoordinates(#) in the console to return coordinate values from an index."
            );

function GetIndex(coord_x, coord_y) {
    if (coord_x >= grid_x || coord_y >= grid_y) return -1;
    let ind = (coord_y * grid_x) + coord_x;
    return (`${ind}`);
}
function GetCoordinates(ind) {
    if (ind >= (grid_x * grid_y) ) return(`(Inf, Inf)`);
    if (ind < 0) return(`(-1, -1)`);
    let x = (ind % grid_x);
    let y = Math.floor(ind / grid_x);
    return (`(${x}, ${y})`);
}