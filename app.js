$(() => {
$('h1').on('mouseover', () => {
    $('#hello').show(2000)
})

$('h2').on('click', () => {
    $('.bio').show(2000)

})

$('p').on('click',function(){
    $(this).hide()
    

});




    let currentImgIndex = 0
    let numOfImages = $('.container').children().length - 1
    
    
    
    $('.next').on('click', () => {
        $('.container').children().eq(currentImgIndex).
        css('display', 'none')
        ///////////////////////adding an event handler for the "next" button//////////////////////////
        if(currentImgIndex < numOfImages) {
            currentImgIndex++
            } else {
            currentImgIndex = 0
            }
            $('.container').children().eq(currentImgIndex).
            css('display', 'block')
    })
    
    
    // don't forget to put a period on "previouse" because that's a class 
    $('.previous').on('click', () => {
    //////////////////////adding event handler for the "previous" button/////////////////////////////
        $('.container').children().eq(currentImgIndex).css('display', 'none')
        
        
        if(currentImgIndex > 0) {
            currentImgIndex--
        } else {
            currentImgIndex = numOfImages
        }
        $('.container').children().eq(currentImgIndex).css('display', 'block')
    })
    
    
    /////////////////////// This is a simple carousel that you can use for jquery /////////////////////
    
    
    
    
    
    
    });
    