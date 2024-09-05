var fullsrcbox = document.getElementById("fullsrcbox");
        var fullsrc = document.getElementById("fullsrc");

        function openfullsrc(src){
            fullsrc.src=src;
            fullsrcbox.style.display="flex";

        }

        function closefullsrc(){
            fullsrcbox.style.display="none"
        }