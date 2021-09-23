//Initialise array to store all objects and import component object
import Component from "./component.js";
let array = [];
let oldName ="";

//Used when submitting a new component
document.getElementById("addButton").addEventListener("click",addComponent);
document.getElementById("editButton").addEventListener("click",editComponent);
document.getElementById("findButton").addEventListener("click",autoFill);
document.getElementById("deleteButton").addEventListener("click",deleteComponent);

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
}

function deleteComponent(name){
    //On click, get the name of the component to be deleted
    //Then find the position in the array and cut it out
    let position = findPosition(oldName);
    array.splice(position, 1);
    console.log(JSON.stringify(array));
    calculateCOM();
}

function findPosition(name){
    for(let i =0; i < array.length ; i++){
        if(array[i].name == name){
            return i;
        }
    }
    return -1;
}

function calculateCOM(){
    if (array.length > 0){
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
        document.getElementById('COM').innerHTML = "(" + (weightedX/totalMass).toFixed(1) + "," + (weightedY/totalMass).toFixed(1) + "," +(weightedZ/totalMass).toFixed(1) + ")";
    }
    else{
        document.getElementById('COM').innerHTML = "(0,0,0)";
    }

}

function autoFill(){
    let index = findPosition(document.getElementById('findEdit').value);
    if(index != -1){
        document.getElementById('nameEdit').value = array[index].name;
        document.getElementById('massEdit').value = array[index].mass;
        document.getElementById('X_COMEdit').value = array[index].X_COM;
        document.getElementById('Y_COMEdit').value = array[index].Y_COM;
        document.getElementById('Z_COMEdit').value = array[index].Z_COM;
        oldName = array[index].name;
    }
    else{
        document.getElementById('findEdit').value = 'Not Found';
        document.getElementById('nameEdit').value = '';
        document.getElementById('massEdit').value = '';
        document.getElementById('X_COMEdit').value = '';
        document.getElementById('Y_COMEdit').value = '';
        document.getElementById('Z_COMEdit').value = '';
    }


}

function editComponent(){
    let index = findPosition(oldName);

    if(index != -1){
        array[index].name = document.getElementById('nameEdit').value;
        array[index].mass = document.getElementById('massEdit').value ;
        array[index].X_COM = document.getElementById('X_COMEdit').value
        array[index].Y_COM = document.getElementById('Y_COMEdit').value;
        array[index].Z_COM = document.getElementById('Z_COMEdit').value;
    }
    else{
        document.getElementById('findEdit').value = "Edit failed - Not found";
    }
    console.log(JSON.stringify(array));
    calculateCOM();

}