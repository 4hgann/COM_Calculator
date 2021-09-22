//Initialise array to store all objects and import component object
import Component from "./component.js";
let array = [];
let selectIndex = 2;

//Used when submitting a new component
document.getElementById("addButton").addEventListener("click",addComponent);
document.getElementById("findButton").addEventListener("click",autoFill);

let option = document.createElement("option");
let select = document.getElementById('dropdown');

function addComponent(){
    //Use my custom class to store the inputs into the form
    let component = new Component(
    document.getElementById('name').value,
    parseFloat(document.getElementById('mass').value),
    parseFloat(document.getElementById('X_COM').value),
    parseFloat(document.getElementById('Y_COM').value),
    parseFloat(document.getElementById('Z_COM').value));

    //Add this component to an array for calculations
    array.push(component);
    console.log(JSON.stringify(array));

    //Recalculate the COM
    calculateCOM();

    //Add the component name to the edit dropdown menu
    addOption();

    
}

function deleteComponent(name){
    //On click, get the name of the component to be deleted
    //Then find the position in the array and cut it out
    let position = findPosition(name);
    someArray.splice(position, 1);
}

function findPosition(name){
    for(let i =0; i < array.length ; i++){
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

    for (let i = 0; i < array.length; i++){
        totalMass += array[i].mass;
        weightedX += array[i].mass * array[i].X_COM;
        weightedY += array[i].mass * array[i].Y_COM;
        weightedZ += array[i].mass * array[i].Z_COM;
    }
    console.log(totalMass);
    console.log(weightedX);
    //COM in each dimension is the weighted / the total mass. This is directly put into innerHTML and displayed
    document.getElementById('COM').innerHTML = "(" + Math.floor(weightedX/totalMass) + "," + Math.floor(weightedY/totalMass) + "," + Math.floor(weightedZ/totalMass) + ")";
}

function addOption(){

}

function autoFill(){
    
}