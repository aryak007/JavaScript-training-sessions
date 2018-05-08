(function () {
    console.log("Nested funcs");
    (function () {
        console.log("Nested funcs");
        (function () {
            console.lg("Nested funcs");
            (function () {
                console.log("Nested funcs");
                (function () {
                    console.log("Nested funcs");
                })();
            })();
        })();
    })();
})();






// (function foo1() {
//     console.log("Nested funcs");
//     (function foo2() {
//         console.log("Nested funcs");
//         (function foo3() {
//             console.lg("Nested funcs");
//             (function foo4() {
//                 console.log("Nested funcs");
//                 (function foo5() {
//                     console.log("Nested funcs");
//                 })();
//             })();
//         })();
//     })();
// })();