function distanceFromHqInBlocks(somevalue) {
    let distance = somevalue - 42;
    return Math.abs(distance)
};

function distanceFromHqInFeet(somevalue) {
    return Math.abs(distanceFromHqInBlocks(somevalue))*264

};


function distanceTravelledInFeet(start,end) {
    return Math.abs((end-start)* 264)

};
    
function calculatesFarePrice(start,end) {
    const distance= distanceTravelledInFeet(start,end);
    const tvr= distance - 400;
if (distance < 400) {
    return 0;
}
else if (distance > 400 && distance<=2000) {
    return tvr * 0.02;
}
else if (distance >2000 && distance <=2500){
    return 25;
}
else{ 
    return "cannot travel that far";
}
      
}

