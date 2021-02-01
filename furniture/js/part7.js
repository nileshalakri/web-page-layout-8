class Images {

    constructor(img_url, rating) {
        this.img_url = img_url;
        this.rating = rating;
    }

}





index = 0;

function changeImgCard(cmd) {

    images = [
        [
            new Images('./images/chair_1.jpg', 4),
            new Images('./images/chair_2.webp', 3),
            new Images('./images/chair_3.jpg', 5),
            new Images('./images/chair_4.jpg', 4)
        ],
        [
            new Images('./images/chair_5.jpeg', 5),
            new Images('./images/chair_6.jpg', 4),
            new Images('./images/chair_7.jpg', 4),
            new Images('./images/chair_8.jpg', 3)
        ]
    ];

    image_tag_id = ['one', 'two', 'three', 'four'];

    rating_id = [
        ['r11','r12','r13','r14','r15'],
        ['r21','r22','r23','r24','r25'],
        ['r31','r32','r33','r34','r35'],
        ['r41','r42','r43','r44','r45'],
    ];

    if (cmd == 1) {
        index++;
        if (index > 1) {
            index = 0;
        }

    } else if (cmd == 0) {
        index--;
        if (index < 0) {
            index = 1;
        }
    }

    for(a=0;a<4;a++){
        for(b=0;b<5;b++){
            document.getElementById(rating_id[a][b]).style.color='black';
        }
    }

    for (i=0; i<4; i++) {
        document.getElementById(image_tag_id[i]).src = images[index][i].img_url;
        for(j=0;j<images[index][i].rating;j++){
            document.getElementById(rating_id[i][j]).style.color='yellow';
        }
    }


}