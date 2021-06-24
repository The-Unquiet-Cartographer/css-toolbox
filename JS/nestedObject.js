const Maps = {
    tomb: {
        entrance: "e",
        exit_e: null,
    },

    karnak: {
        entrance: "w",
        exit_n: {jump: 2},
        exit_e: null,
        exit_s: {jump: 2, breathe: 1},
        exit_w: {jump: 2}
    },
};

for (let Map in Maps) {
    console.log (Map);                          //'tomb'
    console.log (Maps.Map);                     //undefined
    console.log (Maps[Map]);                    //Object>
    console.log ('tomb' in Maps);               //true
}