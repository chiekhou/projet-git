/**
 * 
 * @param {index} 
 * @param {element} 
 */
function hideOther(index, element){
    for(let i=0; i<element.length; i++){
        if(i != index){
            element[i].style.display = "none";
        }
    }
}

console.log('Je signe sur le commit de Karim')