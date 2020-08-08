window.jQuery = function (selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === "string") {
        elements = document.querySelectorAll(selectorOrArray);
        console.log(elements);
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray;
        console.log(elements);
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
                console.log(array);
            }
            // const newApi = jQuery(array);
            return array;
        }
    }
}