function addComponent(){
    //Use my custom class to store the inputs into the form
    let component = new Component(
    document.getElementById('name').innerHTML,
    document.getElementById('mass').innerHTML,
    document.getElementById('X_COM').innerHTML,
    document.getElementById('Y_COM').innerHTML,
    document.getElementById('Z_COM').innerHTML);

    //Add this component to an array for calculations


    //Redisplay the COM

    //Add the component name to a display
    
}

function deleteComponent(name){
    //On click, get the name of the component to be deleted
    //Then find the position in the array and cut it out
    let position = findPosition(name);
    someArray.splice(position, 1);
}

function findPosition(name){
    for(i =0; i < array.length() ; i++){
        if(array[i].name == name){
            return i;
        }
    }
}

calculateCOM(){
    let totalMass = 0;
    let weightedX = 0;
    let weightedY = 0;
    let weightedZ = 0;

    for (i = 0; i < array.length(); i++){
        totalMass += array[i].mass;
        weightedX += array[i].mass* array[i].XCOM;
        weightedY += array[i].mass* array[i].YCOM;
        weightedZ += array[i].mass* array[i].ZCOM;
    }
    //COM is the weighted / the total mass. This is directly put into innerHTML and displayed
    
}

//Initialise array to store all objects
let array = [];