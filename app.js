$(() => {
$('h1').on('mouseover', () => {
    $('#hello').show(2000)
})

$('h2').on('click', () => {
    

})

// $('p').on('click',function(){
//     $(this).hide()
// window.scrollTo(0, 0)
    






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

    function myFunction() {
        document.getElementById('myDropdown').classList.toggle('show')
    }

    window.onclick = function(event) {
        if(!event.target.matches('.dropbtn')) {
            let dropdowns = document.getElementsByClassName('dropdown-content')
            let i;
            for(i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    
    let modal = document.getElementById('myModal')
    let btn = document.getElementById('myBtn')
    let span = document.getElementsByClassName('close')[0]
    btn.onclick = function() {
        modal.style.display = 'block'
    }

    span.onclick = function() {
        modal.style.display ='none'
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'
        }
    }

    function openNav() {
        document.getElementById('mySidenav').style.width = '250px'
    }

    function closeNav() {
        document.getElementById('mySidenav').style.width = '0'
    }

    function openNav() {
        document.getElementById('mySidenav').style.width = '250px'
        document.getElementById('main').style.marginLeft = '250px'
    }

    function closeNav() {
        document.getElementById('mySidenav').style.width = '0'
        document.getElementById('main').style.marginLeft = '0'
    }

    function openNav() {
        document.getElementById('mySidenav').style.width = '250px'
        document.getElementById('main').style.marginLeft = '250px'
        document.body.style.backgroundColor = 'rgba(0,0,0,0.4)'
    }

    function closeNav() {
        document.getElementById('mySidenav').style.width = '0'
        document.getElementById('main').style.marginLeft = '0'
        document.body.style.backgroundColor = 'white'
    }