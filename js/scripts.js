
    //dynamically add an image and set its attribute
    var imgx= document.createElement("img");
    imgx.src="images/cross.png";
    imgx.id="cross";

    var imgo= document.createElement("img");
    imgo.src="images/circle.png";
    imgo.id="circle";



var player_one = 1;
function display_input(square){
    if ( player_one == 1 ){
        document.getElementById(square).appendChild(imgx);
        player_one = 0;
    } else {
        document.getElementById(square).appendChild(imgo);
        player_one = 1;
    }
}
