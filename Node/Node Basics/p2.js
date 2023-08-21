function Area(side1, side2, side3) {
    //values
    var side1 = side1
    var side2 = side2
    var side3 = side3

    //formula
    var s = (side1 + side2 + side3) / 2;
  //final formula
    var area = Math.sqrt(s * ((s - side1) 
            * (s - side2) * (s - side3)));
  //finally printing output in gitbash or terminal in the form of console.log method
    console.log("area of the triangle = ", area);
}
Area(2, 4, 5);