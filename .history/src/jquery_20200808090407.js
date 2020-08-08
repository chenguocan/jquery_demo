window.jQuery = function (selector) {
    const elements = document.querySelectorAll(selector);
    //api可以操作elements
    return {
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className);
            }
            return this;
        },
        find(selector) {
            let array = [];
            for (let i = 0; i < elements.length; i++) {
                array = array.concat(elements[i].querySelectorAll(selector));

            }
        }
    }
}