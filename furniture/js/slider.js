index = 0;
images = ['slide_1.jpeg', 'slide_2.jpeg', 'slide_3.jpeg', 'slide_4.jpeg'];


function changeImg(cmd) {
    
    if (cmd == 1) {
        index++;
        if (index > 3) {
            index = 0;
        }

    } else if (cmd == 0) {
        index--;
        if (index < 0) {
            index = 3;
        }
    }
    img_url = './images/' + images[index];
    document.getElementById('slide_image').src = img_url;
    switchColor(index);

}

function toggleImg(uid){
    index=uid;
    img_url = './images/' + images[index];
    document.getElementById('slide_image').src = img_url;
    switchColor(uid);
}

function switchColor(place){

    if(place==0){
        document.getElementById('first-slide').style.color=' rgb(221, 16, 176)';
        document.getElementById('second-slide').style.color='rgba(29, 27, 29, 0.815)';
        document.getElementById('third-slide').style.color='rgba(29, 27, 29, 0.815)';
        document.getElementById('fourth-slide').style.color='rgba(29, 27, 29, 0.815)';
    } else if(place==1){
        document.getElementById('second-slide').style.color=' rgb(221, 16, 176)';
        document.getElementById('first-slide').style.color='rgba(29, 27, 29, 0.815)';
        document.getElementById('third-slide').style.color='rgba(29, 27, 29, 0.815)';
        document.getElementById('fourth-slide').style.color='rgba(29, 27, 29, 0.815)';
    } else if(place==2){
        document.getElementById('third-slide').style.color=' rgb(221, 16, 176)';
        document.getElementById('second-slide').style.color='rgba(29, 27, 29, 0.815)';
        document.getElementById('first-slide').style.color='rgba(29, 27, 29, 0.815)';
        document.getElementById('fourth-slide').style.color='rgba(29, 27, 29, 0.815)';
    } else if(place==3){
        document.getElementById('fourth-slide').style.color=' rgb(221, 16, 176)';
        document.getElementById('second-slide').style.color='rgba(29, 27, 29, 0.815)';
        document.getElementById('third-slide').style.color='rgba(29, 27, 29, 0.815)';
        document.getElementById('first-slide').style.color='rgba(29, 27, 29, 0.815)';
    }

}