function setinframe(vall) {

    function getFirstPart(str) {
        return str.substring(0, str.indexOf("~"));
    }

    function getSecondPart(str) {
        return str.split('~')[1];
    }


    document.getElementById("mainfrdesc").innerHTML = getSecondPart(vall);
    document.getElementById("mainfrtitle").innerHTML = getFirstPart(vall);
    var post_id = getPostId(vall);

    $.ajax({
        url: 'ajax/set_images',
        data: {
            'post_id': post_id
        },
        success: function(data) {
            $("#imageList").html(data);
            server
        },
        error: function() {
            alert("Post Set Failed");
        }
    });

    function getPostId(str) {
        return str.substring(str.lastIndexOf('~') + 1);
    }

}