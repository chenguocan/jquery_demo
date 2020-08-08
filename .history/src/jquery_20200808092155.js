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
                const elements2 = Array.from(elements[i].querySelectorAll(selector));
                array.concat(elements2);
            }
            return array;
        }
    }
}