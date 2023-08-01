    //order maximum numbers in given nested arrays
//    function largestOfFour(arr) {
//   const results = [];
//   for (let i = 0; i < arr.length; i++) {
//     let largestNumber = arr[i][0];
//     for (let j = 1; j < arr[i].length; j++) {
//       if (arr[i][j] > largestNumber) {
//         largestNumber = arr[i][j];
//       }
//         }
//         results[i] = largestNumber;
//     }

//     return results;
//     }
//    console.log( largestOfFour([
//         [4, 5, 1, 3], 
//         [13, 27, 18, 26], 
//         [32, 35, 37, 39], 
//         [1000, 1001, 857, 1]
//         ]));

        //repeating string
        // function repeatStringNumTimes(str, num) {
        // let result="";
        // for(let i=0; i<num; i++){
        //     for(let j=0; j<num; j++){
        //         result+=str.charAt(j);
        //     }
        //     result+="-"
           
        // }
        // str=result;
        // return str;
        // }

        // console.log(repeatStringNumTimes("abc", 3));

        //turncating a string
        function truncateString(str, num) {
            let result = "";
            for(let i=0;i<str.length-1; i++){
                if(i<=num){
                    result+=str.charAt(i);
                }
            }
            str=result+"...";
        return str;

        }

       console.log(truncateString("A-tisket a-tasket A green and yellow basketdddddddddddddddddddddddd", 8));