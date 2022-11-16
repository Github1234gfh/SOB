// 1
if (document.querySelector('.field')) {
    document.querySelector('.field').onclick = function() {
        var ball = document.querySelector('.ball')
        var cord = [this.clientWidth, this.clientHeight, this.offsetTop, this.offsetLeft]
        if ((event.clientY-cord[2]-30 > 0 && event.clientY-cord[2]-30 < 110) && (event.clientX-cord[3]-30 > 0 && event.clientX-cord[3]-30 < 160)) {
            ball.style.cssText = 
                `top: ${event.clientY-cord[2]-30}px;`+
                `left: ${event.clientX-cord[3]-30}px;`;
        } else {
            return;
        }
    };
};

// 2
function ButtonClose() {
    var elem = document.querySelectorAll('.pane')
    for (let i = 0; i< elem.length; i++) {
        var button = document.createElement('button');
        button.setAttribute('class', 'remove-button')
        button.innerText = '[x]'
        elem[i].appendChild(button)
    };
};
ButtonClose()

// 3
var elems = document.querySelectorAll('.remove-button')
for (let i = 0; i < elems.length; i++) {
    elems[i].onclick = function() {
        this.parentElement.style.cssText = 
        'display: none;';
    }
}