function uploadImage(){
    var url = document.getElementById("imageURL").value;
    var caption = document.getElementById("caption").value;
     var htmlBlock = '<div class="row justify-content-center"><div class="col"><div class="card"><div class="card-header"><img src="https://pixel.nymag.com/imgs/fashion/daily/2019/06/18/18-puppy-dog-eyes.w700.h700.jpg" alt="Avatar" class="circleImage"><p class="pictureOwner">a_cute_doggie</p></div><div class="card-body"><img class="card-img-top" src="'+url+'" alt="Card image"></div><div class="card-footer"><p class="user">the_cute_dog</p><p class="description">'+caption+'</p></div></div></div></div>';
    var feedSection = document.getElementById("instagramFeed");
    $("#instagramFeed").append(htmlBlock);

}