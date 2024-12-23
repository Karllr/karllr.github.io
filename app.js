const sections=document.getElementsByTagName("section");

//document.body.style.height=`${sections[0].getBoundingClientRect().height*(sections.length+1)}px`;


window.onscroll=(e)=>{
    var scrolly=document.body.getBoundingClientRect().y;
    //console.log(window.getBoundingClientRect())
    for(var i=0;i<sections.length;i++){
        //sections[i].style.transform=`translate(${scrolly}px,0px)`;
        sections[i].animate(
            {
                transform:`translate(${scrolly}px,0px)`
            },
            {
                duration:500,
                easing:"linear",
                fill:"forwards"
            }
        )
    }
}
