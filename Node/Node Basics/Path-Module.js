//path is will gives the browser path in our system

const path = require("path");
console.log(`path sep = `, path.sep); //index path
/*
output: path sep =  \
*/


//join path
const filePath =path.join(`content`, `sub`, `test.txt`)
console.log('filepath = ', filePath);
/*
output: filepath =  content\sub\test.txt
*/


//base path (it will gives the perticular file name end of the path name)
const basePath = path.basename(filePath)
console.log(`base name= ${basePath}`)
/*
output: filepath =  base name= test.txt
*/


//absolute path (complete path of file)
const absolute = path.resolve(__dirname, 'content', 'images', 'img1.jpg')//--dirname = > folder path
console.log('absolute path = ', absolute);
/*
output: absolute path =  D:\BE PRACTICAL\Full stack\Frontend\Node\Node Basics\content\images\img1.jpg

*/