    document.getElementById("Make").addEventListener("load", myAirtable());
    document.getElementById("Make").addEventListener("change", makemodel);
    document.getElementById("Model").addEventListener("change", otherParameters);
    document.getElementById("Front-2-windows").addEventListener("click", Front2Windows);
    document.getElementById("Back-half").addEventListener("click", BackHalf);
    document.getElementById("Full-Car-All-Doors-Back").addEventListener("click", FullCarAllDoorsandBack);
    document.getElementById("Windshield-as-a-Bundle").addEventListener("click", WindshieldAsaBundle);
    document.getElementById("Windshield-Alone").addEventListener("click", WindshieldAlone);
    document.getElementById("Full-Car-plus-Windshield-at-Bundle-Price").addEventListener("click", FullCarPlusWindshield);
    document.getElementById("Single-door-window").addEventListener("click", SingleDoorWindow);
    document.getElementById("Sun-Strip").addEventListener("click", SunStrip);
    document.getElementById("Panoramic-Sunroof").addEventListener("click", PanoramicSunroof);
    document.getElementById("Double-Sunroof").addEventListener("click", DoubleSunroof);
    document.getElementById("Sunroof").addEventListener("click", Sunroof);
    
    let make_list = []; //make an empty list of makes
    let model_list = []; //make an empty list of models
    let year_list = [];  //make an empty list of years
    var json_list=[];
    var json = {};
    let modelfilter=[];
    let yearfilter = [];
    
    function myAirtable(){
    let xyy="";
    console.log("yes i have been called");
    var Airtable = require('airtable');
    
    var base = new Airtable({apiKey: 'patVdQLqyb4HiwQwy.d565b293b6eec2157f974f60aa3608c1120bad26a9b29c8f4fbddc3ed6cfe3bc'}).base('appEu3iPKkU8MBiYe');
    
    base('Imported table').select({
        
        maxRecords: 10000,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        
    
        records.forEach(function(record) {
           

           make_list.push(record.get("Make"));
           model_list.push(record.get("Model"));
           year_list.push(record.get("Year"));
           
           json={
           "Make":record.get("Make"),
           "Model":record.get("Model"),
           "Year":record.get("Year"),
           "Package1":record.get("Front 2 Windows | Black"),
           "Package2":record.get("Back Half | Black (from Types)"),
           "Package3":record.get("Full Car (All Doors & Back) | Black (from Types)"),
           "Package4":record.get("Windshield as a Bundle | Black (from Types)"),
           "Package5":record.get("Windshield Alone | Black"),
             "Package6":record.get("Full Car plus Windshield (at Bundle Price) | Black (from Types)"),
            "Package7":record.get("Single door window | Black"),
           "Package8":record.get("Sun Strip | Black"),
           "Package9":record.get("Panoramic Sunroof | Black (from Types)"),
           "Package10":record.get("Double Sunroof | Black (from Types)"),
           "Package1Ceramic":record.get("Front 2 Windows | Black Ceramic"),
           "Package2Ceramic":record.get("Back Half | Black Ceramic (from Types)"),
             "Package3Ceramic":record.get("Full Car (All Doors and Back) | Black Ceramic (from Types)"),
           "Package4Ceramic":record.get("Windshield as a Bundle | Black Ceramic (from Types)"),
            "Package5Ceramic":record.get("Windshield Alone | Black Ceramic"),
           "Package6Ceramic":record.get("Full Car plus Windshield (at Bundle Price) | Black Ceramic (from Types)"),
           "Package7Ceramic":record.get("Single door window | Black Ceramic"),
           "Package8Ceramic":record.get("Sun Strip | Black Ceramic"),
           "Package9Ceramic":record.get("Panoramic Sunroof | Black Ceramic (from Types)"),
            "Package10Ceramic":record.get("Double Sunroof | Black Ceramic (from Types)"),
           "Package11Ceramic":record.get("Sunroof | Black Ceramic"),
           
           "Package1i3Ceramic":record.get("Front 2 Windows | i3 Ceramic"),
           "Package2i3Ceramic":record.get("Back Half | i3 Ceramic (from Types)"),
           "Package3i3Ceramic":record.get("Full Car (All Doors and Back) | i3 Ceramic (from Types)"),
           "Package4i3Ceramic":record.get("Windshield as a Bundle | i3 Ceramic (from Types)"),
           "Package5i3Ceramic":record.get("Windshield Alone | i3 Ceramic"),
            "Package6i3Ceramic":record.get("Full Car plus Windshield (at Bundle Price) | i3 Ceramic (from Types)"),
            "Package7i3Ceramic":record.get("Single door window | i3 Ceramic"),
           "Package8i3Ceramic":record.get("Sun Strip | i3 Ceramic"),
           "Package9i3Ceramic":record.get("Panoramic Sunroof | i3 Ceramic (from Types)"),
           "Package10i3Ceramic":record.get("Double Sunroof | i3 Ceramic (from Types)"),
           "Package11i3Ceramic":record.get("Sunroof | i3 Ceramic")
          
           }
           
          //console.log(json);
         json_list.push(json);
         
        });
        

        make_list = make_list.filter((item, i, ar) => ar.indexOf(item) === i);

         
         for (let i=0; i<=make_list.length; i++){
        var myElem = document.getElementById("make"+i);
        if ((myElem === null) && make_list[i]!=undefined){
         var b = document.createElement("option");
         b.setAttribute('id','make'+i);
         document.getElementById("Make").appendChild(b);
         document.getElementById("make"+i).innerHTML = make_list[i];
        }

         //console.log(make_list);
      
         }
   

    

        fetchNextPage();

    }, function done(err) { 
    
        if (err) { console.error(err); return; }
      

    });
    
         
    }
 function makemodel(){
 /*filter json to remove duplicates and undefined and null values, clear dropdown to remove initial values, populate drop down with new values*/

//**********************filter arrays*******************
         var newArray=[];
         
        
         newArray = json_list.filter(function (el) {
  return el.Make === document.getElementById("Make").value
});

      
     
    //console.log(newArray);
    for (let element in newArray){
    if (newArray[element]!=null||newArray[element]!=undefined){
    modelfilter.push(newArray[element].Model);
    yearfilter.push(newArray[element].Year);
   
    }
    modelfilter = modelfilter.filter((item, i, ar) => ar.indexOf(item) === i);
 
     yearfilter = yearfilter.filter((item, i, ar) => ar.indexOf(item) === i);
            
 const parent = document.querySelector('#Model');

       while (parent.firstChild) {
       
        parent.removeChild(parent.firstChild);
        
      //  console.log(parent.firstChild);
    } 
    
    
  const parent2 = document.querySelector('#Year');

       while (parent2.firstChild) {
       
        parent2.removeChild(parent2.firstChild);
        
      //  console.log(parent.firstChild);
    } 
       

           
         for (let i=0; i<=modelfilter.length; i++){
        var myElem = document.getElementById("model"+i);
        if ((myElem === null) && modelfilter[i]!=undefined){
         var b = document.createElement("option");
         b.setAttribute('id','model'+i);
         document.getElementById("Model").appendChild(b);
         document.getElementById("model"+i).innerHTML = modelfilter[i];
        }


      
         }
        
        
        for (let i=0; i<=yearfilter.length; i++){
        var myElem = document.getElementById("year"+i);
        if ((myElem === null) && yearfilter[i]!=undefined){
         var b = document.createElement("option");
         b.setAttribute('id','year'+i);
         document.getElementById("Year").appendChild(b);
         document.getElementById("year"+i).innerHTML = yearfilter[i];
        }


      
         }
        
    }
//console.log(newArray);
modelfilter=[];
console.log(yearfilter);
yearfilter=[];

   } 
  function otherParameters(){
   var Front2Windows=[];
   var BackHalf=[];
   var FullCarAllDoorsandBack=[];
   var WindshieldAsaBundle=[];
   var WindshieldAlone=[];
   var FullCarPlusWindshield=[];
   var SingleDoorWindow=[];
   var SunStrip=[];
   var PanoramicSunroof=[];
   var DoubleSunroof=[];
   var Sunroof=[];
   
   
   var parametersModel=[];
    parametersModel = json_list.filter(function (el) {
  return el.Make === document.getElementById("Make").value,
         el.Model=== document.getElementById("Model").value
});

 for (let item in parametersModel){
 console.log(parametersModel[item].Package1);
 Front2Windows.push(parametersModel[item].Package1,parametersModel[item].Package1Ceramic,parametersModel[item].Package1i3Ceramic);
 BackHalf.push(parametersModel[item].Package2,parametersModel[item].Package2Ceramic,parametersModel[item].Package2i3Ceramic);
 FullCarAllDoorsandBack.push(parametersModel[item].Package3,parametersModel[item].Package3Ceramic,parametersModel[item].Package3i3Ceramic);
 WindshieldAsaBundle.push(parametersModel[item].Package4,parametersModel[item].Package4Ceramic,parametersModel[item].Package4i3Ceramic);
  WindshieldAlone.push(parametersModel[item].Package5,parametersModel[item].Package5Ceramic,parametersModel[item].Package5i3Ceramic);
  FullCarPlusWindshield.push(parametersModel[item].Package6,parametersModel[item].Package6Ceramic,parametersModel[item].Package6i3Ceramic);
  SingleDoorWindow.push(parametersModel[item].Package7,parametersModel[item].Package7Ceramic,parametersModel[item].Package7i3Ceramic);
  SunStrip.push(parametersModel[item].Package8,parametersModel[item].Package8Ceramic,parametersModel[item].Package8i3Ceramic);
  PanoramicSunroof.push(parametersModel[item].Package9,parametersModel[item].Package9Ceramic,parametersModel[item].Package9i3Ceramic);
  DoubleSunroof.push(parametersModel[item].Package10,parametersModel[item].Package10Ceramic,parametersModel[item].Package10i3Ceramic);
 Sunroof.push(parametersModel[item].Package11Ceramic,parametersModel[item].Package11i3Ceramic);
 
 var minFront2Windows = Math.max(...Front2Windows);
 var minBackHalf = Math.max(...BackHalf);
 var minFullCarAllDoorsandBack = Math.max(...FullCarAllDoorsandBack);
 var minWindshieldAsaBundle = Math.max(...WindshieldAsaBundle);
 var minWindshieldAlone = Math.max(...WindshieldAlone);
 var minFullCarPlusWindshield = Math.max(...FullCarPlusWindshield);
 var minSingleDoorWindow = Math.max(...SingleDoorWindow);
 var minSunStrip = Math.max(...SunStrip);
 var minPanoramicSunroof = Math.max(...PanoramicSunroof);
 var minDoubleSunroof = Math.max(...DoubleSunroof);
 var minSunroof = Math.max(...Sunroof);
 console.log (minFront2Windows);
  document.getElementById("P2").innerHTML="Starting at $" + minFront2Windows;
  document.getElementById("P3").innerHTML="Starting at $" + minBackHalf;
  document.getElementById("P4").innerHTML="Starting at $" + minFullCarAllDoorsandBack;
  document.getElementById("P5").innerHTML="Starting at $" + minWindshieldAsaBundle;
  document.getElementById("P6").innerHTML="Starting at $" + minWindshieldAlone;
  document.getElementById("P7").innerHTML="Starting at $" + minFullCarPlusWindshield;
  document.getElementById("P8").innerHTML="Starting at $" + minSingleDoorWindow;
  document.getElementById("P9").innerHTML="Starting at $" + minSunStrip;
  document.getElementById("P10").innerHTML="Starting at $" + minPanoramicSunroof;
  document.getElementById("P11").innerHTML="Starting at $" + minDoubleSunroof;
  document.getElementById("P1").innerHTML="Starting at $" + minSunroof;
  
 //console.log(Front2Windows);
}


}
let choice="";
let filmtype=[];
let standard=0;
let ceramic=0;
let multilayer=0;

function Front2Windows(){
 choice="";
 choice="Front 2 Windows";
  filmtype = json_list.filter(function (el) {
  return el.Make === document.getElementById("Make").value,
         el.Model=== document.getElementById("Model").value
});  
 
standard=filmtype[0].Package1;
ceramic=filmtype[0].Package1Ceramic; 
multilayer=filmtype[0].Package1i3Ceramic; 
console.log(standard);
document.getElementById("SF").innerHTML="$"+standard;
document.getElementById("CF").innerHTML="$"+ceramic;
document.getElementById("MF").innerHTML="$"+multilayer;
document.getElementById("chosen-film").innerHTML=choice;
}
function BackHalf(){
 choice="";
 choice="Back Half";
  filmtype = json_list.filter(function (el) {
  return el.Make === document.getElementById("Make").value,
         el.Model=== document.getElementById("Model").value
});  
 
standard=filmtype[0].Package2;
ceramic=filmtype[0].Package2Ceramic; 
multilayer=filmtype[0].Package2i3Ceramic; 
console.log(standard);
document.getElementById("SF").innerHTML="$"+standard;
document.getElementById("CF").innerHTML="$"+ceramic;
document.getElementById("MF").innerHTML="$"+multilayer;
document.getElementById("chosen-film").innerHTML=choice;
console.log(standard);
}
function FullCarAllDoorsandBack(){
 choice="";
 choice="Full Car All Doors and Back";
  filmtype = json_list.filter(function (el) {
  return el.Make === document.getElementById("Make").value,
         el.Model=== document.getElementById("Model").value
});  
 
standard=filmtype[0].Package3;
ceramic=filmtype[0].Package3Ceramic; 
multilayer=filmtype[0].Package3i3Ceramic; 
console.log(standard);
document.getElementById("SF").innerHTML="$"+standard;
document.getElementById("CF").innerHTML="$"+ceramic;
document.getElementById("MF").innerHTML="$"+multilayer;
document.getElementById("chosen-film").innerHTML=choice;
console.log(standard);
}
function WindshieldAsaBundle(){
 choice="";
 choice="Windshield as a Bundle";
  filmtype = json_list.filter(function (el) {
  return el.Make === document.getElementById("Make").value,
         el.Model=== document.getElementById("Model").value
});  
 
standard=filmtype[0].Package4;
ceramic=filmtype[0].Package4Ceramic; 
multilayer=filmtype[0].Package4i3Ceramic; 
console.log(standard);
document.getElementById("SF").innerHTML="$"+standard;
document.getElementById("CF").innerHTML="$"+ceramic;
document.getElementById("MF").innerHTML="$"+multilayer;
document.getElementById("chosen-film").innerHTML=choice;
console.log(standard);
}
function WindshieldAlone (){
 choice="";
 choice="Windshield Alone";
  filmtype = json_list.filter(function (el) {
  return el.Make === document.getElementById("Make").value,
         el.Model=== document.getElementById("Model").value
});  
 
standard=filmtype[0].Package5;
ceramic=filmtype[0].Package5Ceramic; 
multilayer=filmtype[0].Package5i3Ceramic; 
console.log(standard);
document.getElementById("SF").innerHTML="$"+standard;
document.getElementById("CF").innerHTML="$"+ceramic;
document.getElementById("MF").innerHTML="$"+multilayer;
document.getElementById("chosen-film").innerHTML=choice;
console.log(standard);
}
function FullCarPlusWindshield(){
 choice="";
 choice="Full Car plus Windshield";
  filmtype = json_list.filter(function (el) {
  return el.Make === document.getElementById("Make").value,
         el.Model=== document.getElementById("Model").value
});  
 
standard=filmtype[0].Package6;
ceramic=filmtype[0].Package6Ceramic; 
multilayer=filmtype[0].Package6i3Ceramic; 
console.log(standard);
document.getElementById("SF").innerHTML="$"+standard;
document.getElementById("CF").innerHTML="$"+ceramic;
document.getElementById("MF").innerHTML="$"+multilayer;
document.getElementById("chosen-film").innerHTML=choice;
console.log(standard);
}
function SingleDoorWindow(){
choice="";
 choice="Single Door Window";
  filmtype = json_list.filter(function (el) {
  return el.Make === document.getElementById("Make").value,
         el.Model=== document.getElementById("Model").value
});  
 
standard=filmtype[0].Package7;
ceramic=filmtype[0].Package7Ceramic; 
multilayer=filmtype[0].Package7i3Ceramic; 
console.log(standard);
document.getElementById("SF").innerHTML="$"+standard;
document.getElementById("CF").innerHTML="$"+ceramic;
document.getElementById("MF").innerHTML="$"+multilayer;
document.getElementById("chosen-film").innerHTML=choice;
console.log(standard);
}
function SunStrip(){
 choice="";
 choice="Sun Strip";
  filmtype = json_list.filter(function (el) {
  return el.Make === document.getElementById("Make").value,
         el.Model=== document.getElementById("Model").value
});  
 
standard=filmtype[0].Package8;
ceramic=filmtype[0].Package8Ceramic; 
multilayer=filmtype[0].Package8i3Ceramic; 
console.log(standard);
document.getElementById("SF").innerHTML="$"+standard;
document.getElementById("CF").innerHTML="$"+ceramic;
document.getElementById("MF").innerHTML="$"+multilayer;
document.getElementById("chosen-film").innerHTML=choice;
console.log(standard);
}
function PanoramicSunroof(){
 choice="";
 choice="Panoramic Sunroof";
  filmtype = json_list.filter(function (el) {
  return el.Make === document.getElementById("Make").value,
         el.Model=== document.getElementById("Model").value
});  
 
standard=filmtype[0].Package9;
ceramic=filmtype[0].Package9Ceramic; 
multilayer=filmtype[0].Package9i3Ceramic; 
console.log(standard);
document.getElementById("SF").innerHTML="$"+standard;
document.getElementById("CF").innerHTML="$"+ceramic;
document.getElementById("MF").innerHTML="$"+multilayer;
document.getElementById("chosen-film").innerHTML=choice;
console.log(standard);
}
function DoubleSunroof(){
 choice="";
 choice="Double Sunroof";
  filmtype = json_list.filter(function (el) {
  return el.Make === document.getElementById("Make").value,
         el.Model=== document.getElementById("Model").value
});  
 
standard=filmtype[0].Package10;
ceramic=filmtype[0].Package10Ceramic; 
multilayer=filmtype[0].Package10i3Ceramic; 
console.log(standard);
document.getElementById("SF").innerHTML="$"+standard;
document.getElementById("CF").innerHTML="$"+ceramic;
document.getElementById("MF").innerHTML="$"+multilayer;
document.getElementById("chosen-film").innerHTML=choice;
console.log(standard);
}
function Sunroof(){
 choice="";
 choice="Sunroof";
  filmtype = json_list.filter(function (el) {
  return el.Make === document.getElementById("Make").value,
         el.Model=== document.getElementById("Model").value
});  
 
standard=filmtype[0].Package3;
ceramic=filmtype[0].Package11Ceramic; 
multilayer=filmtype[0].Package11i3Ceramic; 
console.log(standard);
document.getElementById("SF").innerHTML="Not Available";
document.getElementById("CF").innerHTML="$"+ceramic;
document.getElementById("MF").innerHTML="$"+multilayer;
document.getElementById("chosen-film").innerHTML=choice;
console.log(standard);
}


    
