window.jQuery = function (selectorOrArray) {
    if (typeof selectorOrArray === "string") {
        const elements = document.querySelectorAll(selectorOrArray);
    } else if (selectorOrArray instanceof Array) {
        const elements = selectorOrArray;
    }

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
                array = array.concat(elements2);
            }
            const newApi = jQuery(array);
            return array;
        }
    }
}