window.jQuery = function (selector) {
    const elements = document.querySelectorAll(selector);
    //api可以操作elements
    const api = {
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className);
            }
            return api;
        }
    }
    return api;
}