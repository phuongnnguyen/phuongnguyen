let isShow = false;
function showSidebar() {
    isShow = !isShow;
    isShow ? $("#sidebar").show() : $("#sidebar").hide();
}
// --------------------------------
var progressBarOptions = {
	startAngle: -1.55,
	size: 200,
    value: 0.6,
    fill: {
		color: '#ffa500'
	}
}
$('.circle').circleProgress(progressBarOptions)
            .on('circle-animation-progress', (event, progress, stepValue) => {
	        // $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});

$('#circle-b').circleProgress({
	value : 0.5,
	fill: {
		color: '#FF0000'
	}
});

$('#circle-c').circleProgress({
	value : 0.6,
	fill: {
		color: '#008000'
	}
});
// ----------------------------
let slideIndex = 1;
function move(n) {
    slider(slideIndex += n)
}
function slider(index) {
    if(index < 1) slideIndex = $("#projects img").length;
    if(index > $("#projects img").length) slideIndex = 1;
    
    $("#projects img").hide();
    $("#projects img")[slideIndex - 1].style.display = "block";
}
slider();
// common class name
    //navbar
    $("#navbar li").addClass("w3-bar-item w3-mobile");
    $("#sidebar a").addClass("w3-bar-item");
    //blog section
    $("#blog img").addClass("w3-col s12 m4 l3 w3-round-xxlarge w3-card-2 w3-margin w3-button");
    $("#blog span").addClass("w3-bar-item w3-btn");
    // aboutme section
    $("#aboutme span").addClass("w3-round-large w3-border w3-border-green w3-padding");
    // footer
    $("footer span").addClass("w3-button")
// --------------------------------
// --------------------------------
$(document).ready(() => {
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            if($("#navbar").attr("class").indexOf("w3-card-4") == -1)
            $("#navbar").addClass("w3-card-4");
        }else $("#navbar").removeClass("w3-card-4");
    }    
})
//  ----------------------------



