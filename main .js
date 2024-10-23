let Number = [76, 58, 89, 42, 15, 102, 95, 33, 45, 32, 83, 55, 93, 62]



Number.forEach((i) => {
    console.log(i);
})

let x = 0;

while (x <= 11) {
    console.log(Number[x]);
    x++;
}

let y = 0;

do {
    console.log(Number[y]);
    y++
}
while (y <= 11);

let z = 23;

do {
    console.log("Iam really sorry");
    z++;
}
while (z <= 21);

// for (let R = 0; R <= 11; R++) {

//     if(Number >100|| Number <0){
//         console.log('Invalid marks');
//     }

// else if (Number[R] >= 80) {
//         console.log( Number[R] + "=A+");
//     }


// else if (Number[R] >= 70) {
//     console.log( Number[R] + "=A");
// }

// else if (Number[R] >= 60) {
//     console.log(Number[R] + "=A-");
// }

// else if (Number[R] >= 50) {
//     console.log( Number[R] + "=B");
// }

// else if (Number[R] >= 40) {
//     console.log(Number[R] + "=C");
// }

// else if (Number[R] >= 33) {
//     console.log(Number[R] + "=D");
// }

// else {
//     console.log(Number[R] + "=F");
// }
// }

Number.forEach((R) =>{

 if (R >= 80) {
        console.log( R + "=A+");
    }


else if (R >= 70) {
    console.log( R + "=A");
}

else if (R >= 60) {
    console.log(R + "=A-");
}

else if (R >= 50) {
    console.log( R + "=B");
}

else if (R >= 40) {
    console.log(R + "=C");
}

else if (R >= 33) {
    console.log(R + "=D");
}

else {
    console.log(R + "=F");
}

})

// let R = 0;

// while (R <= 11) {

//  if (Number[R] >= 80) {
//         console.log( Number[R] + "=A+");
//     }


// else if (Number[R] >= 70) {
//     console.log( Number[R] + "=A");
// }

// else if (Number[R] >= 60) {
//     console.log(Number[R] + "=A-");
// }

// else if (Number[R] >= 50) {
//     console.log( Number[R] + "=B");
// }

// else if (Number[R] >= 40) {
//     console.log(Number[R] + "=C");
// }

// else if (Number[R] >= 33) {
//     console.log(Number[R] + "=D");
// }

// else {
//     console.log(Number[R] + "=F");
// }

//   R++;
// }

