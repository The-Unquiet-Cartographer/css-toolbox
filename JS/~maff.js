const Maff = {

    Die_roll: function (min, max) {
        max = Math.floor(max) + 1;                                  //<== Add 1 to max because Math.floor(random * range) will always return < max.
        min = Math.floor(min);                                      //  If Math.floor(random * range) === 0 function returns min;
        return (Math.floor(Math.random() * (max - min)) + min); 
    },

    //Get a die roll that is biased towards the middle of the range like a 2D roll would be.
    //(I don't know if this is actually a gaussian function but it sounds cool).
    Die_roll_gaussian: function (min, max) {
        const a = Maff.Die_roll (min, max);
        const b = Maff.Die_roll (min, max + 1);
        return Math.ceil( ((a + b) - 1) / 2);                       // It works, ok? Just trust me.
        //OR 
        //return Math.ceil( ((a + b) / 2) - 0.5);
    },

    Dice_roll: function (x, min, max) {
        let result;
        for (let i=0; i<x; i++) {
            result += Die_roll(min, max);
        }
        return result;
    },

}