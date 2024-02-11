function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
topSide(pHeight, pColorEven, pColorOdd, pSymbol);

bottomSide(pHeight, pColorEven, pColorOdd, pSymbol);

}

function topSide(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
var whiteSpace = pHeight;
for (i=0;i<pHeight;i++){
  rLine +="<p>";
//Create each line on the Rhombus
for (k=whiteSpace; k>0;k--){
  rLine += "<span style='color:white';>" + pSymbol + "</span>"; 
}
 whiteSpace--;
for(j=0;j<=2*i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
}
  document.getElementById("upLeft").innerHTML = rLine;
}


function bottomSide(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
var whiteSpace = 0;
for (i=pHeight;i > 0;i--){
rLine +="<p>";
//Create each line on the Rhombus
for (k=0; k<whiteSpace;k++){
  rLine += "<span style='color:white';>" + pSymbol + "</span>"; 
}
 whiteSpace++;
for(j=0;j<=2*i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";
//console.log(rLine);

}

document.getElementById("downRight").innerHTML = rLine;
}
