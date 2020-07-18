

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}


function calculos(){


  var qt= document.getElementById("kVAr").value;
  var vl=document.getElementById("vL").value;
  var f=document.getElementById("frec").value;
  alert("ya entre a la funcion")
  qt=parseFloat(qt).toFixed(2);
  vl=parseFloat(vl).toFixed(2);
  f=parseFloat(f).toFixed(2);
  var vf=vl/Math.sqrt(3);
  console.log("El Voltaje de fase es:" + financial(vf) + " V" );
  var il=(qt*1000)/(vl*Math.sqrt(3));
  console.log("La Corriente de linea es:" + financial(il) + " A" );
  var xc=vf/il;
  console.log("Ohms por fase:"+financial(xc) + " Ω/f" );
  var cf=1/(2*Math.PI*f*(xc/1000000));
  console.log("Capacitancia por fase:"+ financial(cf)+ " μF");
  var cl=(1/(2*Math.PI*f*(xc/1000000)))/2;
  console.log("Capacitancia por linea: "+ financial(cl) + " μF" );
  alert("ya  hice los calculos")
  //document.write("<p>");
  //document.write("El Voltaje de fase es: " + "<strong>" + financial(vf) + "</strong>" +" V"+ "<br/>");
  //document.write("La Corriente de linea es: " + "<strong>" + financial(il) + "</strong>" +" A"+ "<br/>");
  //document.write("Ohms por fase: " + "<strong>" + financial(xc) + "</strong>" +" Ω/f"+ "<br/>");
  //document.write("Capacitancia por fase: " + "<strong>" + financial(cf) + "</strong>" +" μF"+ "<br/>");
  //document.write("Capacitancia por linea: " + "<strong>" + financial(cl) + "</strong>" +" μF"+ "<br/>");

  //document.write("</p>");



  document.getElementById("resultados").innerHTML ="<br/>El Voltaje de fase es: " + "<strong>" + financial(vf) + "</strong>" +" V"+ "<br/>";
  document.getElementById("resultados1").innerHTML ="La Corriente de linea es: " + "<strong>" + financial(il) + "</strong>" +" A"+ "<br/>";
  document.getElementById("resultados2").innerHTML ="Ohms por fase: " + "<strong>" + financial(xc) + "</strong>" +" Ω/f"+ "<br/>";
  document.getElementById("resultados3").innerHTML ="Capacitancia por fase: " + "<strong>" + financial(cf) + "</strong>" +" μF"+ "<br/>";
  document.getElementById("resultados4").innerHTML ="Capacitancia por linea: " + "<strong>" + financial(cl) + "</strong>" +" μF";


}




//var form = document.getElementById("Submit")
//form.addEventListener("click", calculos,false);
