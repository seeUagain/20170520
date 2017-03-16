var index = 0;
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
var hammer = new Hammer(document.getElementById("container"));

hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

hammer.on('swipeup', function(ev) {
    if (index == 0) return;
    if (index == 6) return;
    if (index == 5) $('#arrow').css('display', 'none');
    index++;
    show();
});

hammer.on('swipedown', function(ev) {
    if (index == 0) return;
    if (index == 1) return;
    $('#arrow').css('display', 'block');
    index--;
    show();
});

var scene1 = function() {
    $('#animation1').addClass('animated fadeInUp').one(animationEnd, function() {
        $('#animation2').addClass('animated fadeIn').one(animationEnd, function() {
            $('#animation3').addClass('animated fadeIn').one(animationEnd, function() {
                $('#animation4').addClass('animated pulse');
            });
        });
    })
};

var scene2 = function() {
    $('#animation5').addClass('animated animation5').one(animationEnd, function() {
        $('#animation6').addClass('animated animation6').one(animationEnd, function() {
            $('#animation7').addClass('animated fadeInLeft').one(animationEnd, function() {
                $('#animation8').addClass('animated fadeIn').one(animationEnd, function() {
                    $('#animation9').addClass('animated fadeInRight').one(animationEnd, function() {
                        $('#animation10').addClass('animated fadeInRight');
                    })
                });
            });
        });
    });
}

var scene3 = function() {
    $('#animation11').addClass('animated fadeInLeft').one(animationEnd, function() {
        $('#animation12').addClass('animated fadeIn');
        $('#animation13').addClass('animated lightSpeedIn').one(animationEnd, function() {
            $('#animation14').addClass('animated rotateInDownLeft').one(animationEnd, function() {
                $('#animation15').addClass('animated rotateInDownRight');
            });
        });
    });
}

var scene4 = function() {
    $('#animation16').addClass('animated animation20').one(animationEnd, function() {
        $('#animation17').addClass('animated fadeInDown').one(animationEnd, function() {
            $('#animation18').addClass('animated fadeInLeft').one(animationEnd, function() {
                $('#animation19').addClass('animated animation19').one(animationEnd, function() {
                    $('#animation20').addClass('animated animation20').one(animationEnd, function() {
                        $('#animation21').addClass('animated animation21').one(animationEnd, function() {
                            $('#animation22').addClass('animated lightSpeedIn')
                            $('#animation23').addClass('animated fadeIn');
                        });
                    });
                });
            });
        });
    });
}

var scene5 = function() {
    $('#animation24').addClass('animated bounceInDown')
    $('#animation25').addClass('animated bounceInUp').one(animationEnd, function() {
        $('#animation26').addClass('animated lightSpeedIn').one(animationEnd, function() {
            $('#animation27').addClass('animated fadeInDown');
            $('#animation28').addClass('animated fadeIn').one(animationEnd, function() {
                $('#animation29').addClass('animated lightSpeedIn');
            });
        });
    });
}

var scene6 = function() {
    $('#animation30').addClass('animated fadeInUp').one(animationEnd, function() {
        $('#animation31').addClass('animated fadeIn').one(animationEnd, function() {
            $('#animation33').addClass('animated bounceIn');
        });
    })
}

function show() {
    $('#animation1').removeClass('animated fadeInUp');
    $('#animation2').removeClass('animated fadeIn');
    $('#animation3').removeClass('animated fadeIn');
    $('#animation4').removeClass('animated pulse');
    $('#animation5').removeClass('animated animation5');
    $('#animation6').removeClass('animated animation6');
    $('#animation7').removeClass('animated fadeInLeft');
    $('#animation8').removeClass('animated fadeIn');
    $('#animation9').removeClass('animated fadeInRight');
    $('#animation10').removeClass('animated fadeInRight');
    $('#animation11').removeClass('animated fadeInLeft');
    $('#animation12').removeClass('animated fadeIn');
    $('#animation13').removeClass('animated lightSpeedIn');
    $('#animation14').removeClass('animated rotateInDownLeft');
    $('#animation15').removeClass('animated rotateInDownRight');
    $('#animation16').removeClass('animated animation20');
    $('#animation17').removeClass('animated fadeInDown');
    $('#animation18').removeClass('animated fadeInLeft');
    $('#animation19').removeClass('animated animation19');
    $('#animation20').removeClass('animated animation20');
    $('#animation21').removeClass('animated animation21');
    $('#animation22').removeClass('animated lightSpeedIn');
    $('#animation23').removeClass('animated fadeIn');
    $('#animation24').removeClass('animated bounceInDown');
    $('#animation25').removeClass('animated bounceInUp');
    $('#animation26').removeClass('animated lightSpeedIn');
    $('#animation27').removeClass('animated fadeInDown');
    $('#animation28').removeClass('animated fadeIn');
    $('#animation29').removeClass('animated lightSpeedIn');
    $('#animation30').removeClass('animated fadeInUp');
    $('#animation31').removeClass('animated fadeIn');
    $('#animation33').removeClass('animated bounceIn');
    $('#loading').hide();
    if (index == 1) {
        $('#scene-one').show();
        $('#scene-two').hide();
        $('#scene-three').hide();
        $('#scene-four').hide();
        $('#scene-five').hide();
        $('#scene-six').hide();
        scene1();
    } else if (index == 2) {
        $('#scene-one').hide();
        $('#scene-two').show();
        $('#scene-three').hide();
        $('#scene-four').hide();
        $('#scene-five').hide();
        $('#scene-six').hide();
        scene2();
    } else if (index == 3) {
        $('#scene-one').hide();
        $('#scene-two').hide();
        $('#scene-three').show();
        $('#scene-four').hide();
        $('#scene-five').hide();
        $('#scene-six').hide();
        scene3()
    } else if (index == 4) {
        $('#scene-one').hide();
        $('#scene-two').hide();
        $('#scene-three').hide();
        $('#scene-four').show();
        $('#scene-five').hide();
        $('#scene-six').hide();
        scene4();
    } else if (index == 5) {
        $('#scene-one').hide();
        $('#scene-two').hide();
        $('#scene-three').hide();
        $('#scene-four').hide();
        $('#scene-five').show();
        $('#scene-six').hide();
        scene5();
    } else if (index == 6) {
        $('#scene-one').hide();
        $('#scene-two').hide();
        $('#scene-three').hide();
        $('#scene-four').hide();
        $('#scene-five').hide();
        $('#scene-six').show();
        scene6();
    }
}

$('#loading').hide();
$('#scene-one').hide();
$('#scene-two').hide();
$('#scene-three').hide();
$('#scene-four').hide();
$('#scene-five').hide();
$('#scene-six').hide();
$('#arrow').hide();

function preloadImages(arr) {
    var newImages = [];
    for (var i = 0; i < arr.length; i++) {
        newImages[i] = new Image();
        newImages[i].src = './image/' + arr[i];
    }
    return newImages;
}

window.onload = function() {
    var loadingImages = preloadImages(['timg.gif']);
    if (loadingImages.length == 1) {
        $('#loading').show();
        $('#loading-image').attr('src', loadingImages[0].src);
    }
    var resouces = [
        '00d5d1_295_291.png',
        '3b88de_640_1040.png',
        '4bc258_640_1040.png',
        '7c2847_73_200.png',
        '090f41_640_1040.png',
        '090f41_640_1041.png',
        '6297bd_512_512.png',
        'a40c5e_640_1040.png',
        'bd35cb_592_510.png'
    ];
    var sourceImages = preloadImages(resouces);
    if (sourceImages.length == 9) {
        $('#animation24').attr('src', sourceImages[0].src);
        $("#animation2").children(":first").attr('src', sourceImages[1].src);
        $("#animation8").children(":first").attr('src', sourceImages[1].src);
        $("#animation12").children(":first").attr('src', sourceImages[1].src);
        $("#animation23").children(":first").attr('src', sourceImages[1].src);
        $("#animation31").children(":first").attr('src', sourceImages[1].src);
        $("#animation4").children(":first").attr('src', sourceImages[2].src);
        $('#pic2').attr('src', sourceImages[2].src);
        $('#animation27').attr('src', sourceImages[3].src);
        $("#animation1").children(":first").attr('src', sourceImages[4].src);
        $("#animation30").children(":first").attr('src', sourceImages[5].src);
        $("#arrow").children(":first").attr('src', sourceImages[6].src);
        $("#animation3").children(":first").attr('src', sourceImages[7].src);
        $("#animation28").children(":first").attr('src', sourceImages[7].src);
        $('#animation25').attr('src', sourceImages[8].src);
    }
    var weddings = [
        '018.jpg',
        '090.jpg',
        '094.jpg',
        '007.jpg',
        '040.jpg',
        '037.jpg',
        '028.jpg',
        '098.jpg',
        '095.jpg'
    ]
    var weddingImages = preloadImages(weddings);
    if (weddingImages.length == 9) {
        $("#bg-pic").children(":first").attr('src', weddingImages[0].src);
        $('#animation7').attr('src', weddingImages[1].src);
        $('#animation10').attr('src', weddingImages[2].src);
        $('#animation11').attr('src', weddingImages[3].src);
        $('#animation14').attr('src', weddingImages[4].src);
        $('#animation15').attr('src', weddingImages[5].src);
        $('#animation16').attr('src', weddingImages[6].src);
        $('#animation20').attr('src', weddingImages[7].src);
        $('#animation21').attr('src', weddingImages[8].src);
    }
    $('#loading').hide();
    $('#arrow').show();
    index = 1;
    show();
}