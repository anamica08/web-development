var count = 1;
var input = document.getElementById("input");



function changeStyle(event) {
    //select the activity button on which event is triggered.
    let activity = document.getElementById(event.target.id);

    /**if the activity is already striked out change its class
     *  to activityButton which is default css or else change
     *  it to strikeout css . */
    if (activity.className.localeCompare("strikeOut") == 0) {
        activity.className = "activityButton";
    } else {
        activity.className = "strikeOut";
    }
}


/*When user clicks on add todo button  */

var addButton = document.getElementById("add");

addButton.onclick = function addItem() {
    let itemToAdd = input.value;
    let ul = document.getElementById("list");
    let ptag = document.getElementById("errorMessage");
    /*If user clicks add todo button without entering an activity in the textbox provided */
    if (itemToAdd === "") {
        ptag.innerHTML = "Oops! Seems You Haven't entered any task.";
        ptag.className = "errorStyle";
        return false;
    } else {
        /*else Obtain the activity from textbox and add it to the list.*/
        ptag.innerHTML = "";
        var li = document.createElement("li");
        var cb = document.createElement("input");
        cb.type = "button";
        cb.id = "activity" + (++count);
        cb.className = "activityButton";
        cb.value = itemToAdd;
        cb.setAttribute("onclick", "changeStyle(event)")
        li.appendChild(cb);
        ul.insertBefore(li, ul.childNodes[0]);
        input.value = "";

    }
}


/*When user clicks on remove todo button  */

var removeButton = document.getElementById("remove");

removeButton.onclick = function() {
    var ul = document.getElementById("list");
    var liArray = ul.children;
    for (var i = 0; i < liArray.length; i++) {
        while (liArray[i] && liArray[i].children[0].className.localeCompare("strikeOut") == 0) {
            ul.removeChild(liArray[i]);

        }
    }
}




/*Execute a click on add button when the user releases 
a key on the keyboard
*/
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Trigger the ADD button element with a click
        document.getElementById("add").click();
    }
});