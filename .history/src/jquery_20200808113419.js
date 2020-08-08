window.jQuery = function (selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === "string") {
        elements = document.querySelectorAll(selectorOrArray);
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray;
    }

    //api可以操作elements
    return {
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className);
            }
            return this;
        },
        oldApi: selectorOrArray.oldApi,
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i);
            }
            return this;
        },
        parent() {
            const array = [];
            this.each((node) => {
                array.push(node.parentNode)
            })
            return jQuery(array);
        },
        find(selector) {

            let array = [];
            for (let i = 0; i < elements.length; i++) {
                const elements2 = Array.from(elements[i].querySelectorAll(selector));
                array = array.concat(elements2);
                console.log(array);
            }
            array.oldApi = this;
            const newApi = jQuery(array);
            return newApi;
        },
        end() {
            return this.oldApi;
        }
    }
}