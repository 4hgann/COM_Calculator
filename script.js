//Initialise array to store all objects and import component object
import Component from "./component.js";
let array = [];

function addComponent(){
    //Use my custom class to store the inputs into the form
    let component = new Component(
    document.getElementById('name').value,
    document.getElementById('mass').value,
    document.getElementById('X_COM').value,
    document.getElementById('Y_COM').value,
    document.getElementById('Z_COM').value);

    //Add this component to an array for calculations
    array.push(component);

    //Recalculate the COM
    calculateCOM();

    //Add the component name to a display
    
}

function deleteComponent(name){
    //On click, get the name of the component to be deleted
    //Then find the position in the array and cut it out
    let position = findPosition(name);
    someArray.splice(position, 1);
}

function findPosition(name){
    for(let i =0; i < array.length() ; i++){
        if(array[i].name == name){
            return i;
        }
    }
}

function calculateCOM(){
    let totalMass = 0;
    let weightedX = 0;
    let weightedY = 0;
    let weightedZ = 0;

    for (let i = 0; i < array.length(); i++){
        totalMass += array[i].mass;
        weightedX += array[i].mass* array[i].XCOM;
        weightedY += array[i].mass* array[i].YCOM;
        weightedZ += array[i].mass* array[i].ZCOM;
    }
    //COM in each dimension is the weighted / the total mass. This is directly put into innerHTML and displayed
    document.getElementById('COM').innerHTML = "(" + weightedX/totalMass + "," + weightedY/totalMass + "," + weightedZ/totalMass + ")";
}