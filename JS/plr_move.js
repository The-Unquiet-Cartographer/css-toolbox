const plr = document.getElementById("Player");

const ms_interval = 100;

const speedMod = 6;


let move_l = false, move_u = false, move_r = false, move_d = false;
let move_x = 0, move_y = 0;
let _x = 0, _y = 0;
let boundary_x, boundary_y;

let debug = false;

plr.style.height = "20px";
plr.style.width = "20px";
plr.style.position = "absolute";
plr.style.backgroundColor = "#DFFF00";


////////////////////////
/* Get movement input */
////////////////////////

document.addEventListener('keydown', (e) => {
    let keycode = e.keyCode;
    if (keycode === 37) {       //Left
        move_l = true;
    }
    if (keycode === 38) {       //Up
        move_u = true;
    }
    if (keycode === 39) {       //Right
        move_r = true;
    }
    if (keycode === 40) {       //Down
        move_d = true;
    }
});
document.addEventListener('keyup', (e) => {
    let keycode = e.keyCode;
    if (keycode === 37) {       //Left
        move_l = false;
    }
    if (keycode === 38) {       //Up
        move_u = false;
    }
    if (keycode === 39) {       //Right
        move_r = false;
    }
    if (keycode === 40) {       //Down
        move_d = false;
    }
});

if (debug) setInterval( ()=>console.log(`${move_l}, ${move_u}, ${move_r}, ${move_d}`), ms_interval);


//////////////////////////////////////////////////
/* Translate moveInput to x/y directional input */
//////////////////////////////////////////////////

setInterval(ParseMovement, ms_interval);

function ParseMovement() {
    const l = move_l ? 1:0;
    const r = move_r ? 1:0;
    const u = move_u ? 1:0;
    const d = move_d ? 1:0;
    move_x = 0 - move_l + move_r;
    move_y = 0 - move_u + move_d;
    if (debug) console.log (`MoveDir: (${move_x}, ${move_y})`); 
}


setInterval(TrackMovement, ms_interval);

function TrackMovement () {
    _x += move_x * speedMod;
    _y += move_y * speedMod;
    if (debug) console.log (`Pos: (${_x}, ${_y})`);
}


setInterval(MovePlayer, ms_interval);

function MovePlayer () {
    plr.style.left = `${_x}px`;
    plr.style.top = `${_y}px`;
}

