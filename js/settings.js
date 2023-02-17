

const color = [
    {
        name:'pink',
        code:'#fb839e',
        url:'css/skins/pink.css'
    },
    {
        name:'Light Blue',
        code:'#3e99f4',
        url:'css/skins/Light Blue.css'
    },
    {
        name:'Light Green',
        code:'#0dcebd',
        url:'css/skins/Light Green.css'
    },
    {
        name:'Red',
        code:'#cc3a3b',
        url:'css/skins/Red.css'
    },
    {
        name:'Yellow',
        code:'#ff9801',
        url:'css/skins/Yellow.css'
    }
]

$(document).ready(function () {
    setColors();
    function setColors(){
        for(let i=0; i<color.length; i++){
            const span = document.createElement("span");
                  span.style.backgroundColor = color[i].code;
                  $(".colors").append(span);
        }
    }

    $(".colors span").click(function(){
        const index = $(this).index();
        $(".alternate-style").attr("href",color[index].url);
    });
    // theme light & dark mode
    $(".theme-mode").change(function(){
       if($(this).val() == "light"){
           $("body").removeClass("dark")
       }
       else{
           $("body").addClass("dark")
       }  
    })

    // toggle setting box
    $(".s-toggle-btn").click(function(){
        $(".setting").toggleClass("open");
    })
})