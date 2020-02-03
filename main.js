const buttons = document.getElementsByClassName("button");
const button = buttons[0];

button.addEventListener("mousedown", function(e){
    e.preventDefault();
    e.stopPropagation();
    this.style.boxShadow = "inset -2px -2px 4px 1px rgba(255, 255, 255, .73), inset 6px 6px 16px 0 rgba(217, 210, 200, .51)";
});

button.addEventListener("mouseup", function(e){
    e.preventDefault();
    e.stopPropagation();
    this.style.boxShadow = "-6px -6px 26px 0 rgba(255, 255, 255, .83), 6px 6px 16px 0 rgba(217, 210, 200, .51)";
});
