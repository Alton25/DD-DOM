document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    let btnText = document.createTextNode("Add square");
    button.appendChild(btnText);
    document.body.appendChild(button);
    var myDiv = 1;
    button.addEventListener("click", function () {
        let newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        newDiv.className = 'tappy';
        newDiv.title = 'id = \"' + myDiv + '\"';
        newDiv.id = myDiv;
        console.log('div' + myDiv);
        let p = document.createElement('p');
        let text = document.createTextNode('id = \"' + myDiv + '\"');
        newDiv.appendChild(p);
        p.appendChild(text);
        p.style.visibility = "hidden";
        newDiv.addEventListener("mouseover", function(){
            p.style.visibility = "visible";
        })
newDiv.addEventListener("mouseleave", function(){
    p.style.visibility = "hidden";
})
        myDiv++;
        let color = ['Green', 'Blue', 'Purple', 'Brown', 'yellowgreen', 'brown', 'yellow', 'babyblue'];
        newDiv.addEventListener("click", doubleClicked);
        function doubleClicked($event){
            var r = randomTen();
            while(r > 7){
                r = randomTen();
            }
            $event.target.style.backgroundColor = color[r];
            }
            function randomTen(){
                return Math.floor(Math.random() * 10);

            
            }
        newDiv.addEventListener("dblclick", function(){
            if(newDiv.id %2 == 0){
                let nextDiv = newDiv.nextSibling;
              if(nextDiv){
                  nextDiv.remove();
              }else{
                  alert("There isn't a square");
              }

            }else{
                let previousDiv = newDiv.previousSibling;
                if(previousDiv){
                    previousDiv.remove();
                }else{
                    alert("There isn't a square");
                }
  
                
            
            }
        })  
       
    })
})