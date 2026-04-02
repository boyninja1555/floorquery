/*!
 * Floorquery | Modern jQuery drop-in replacement based on a floorjs script
 * © 2026 boyninja1555
 * Released under the MIT License
 * https://github.com/boyninja1555/floorquery
 */

class FloorqueryDOManipulator {
    constructor(selector) {
        this.selector = selector
    }

    class(className) {
        this.select().forEach(el => el.classList.toggle(className))
        return this
    }

    hasClass(className) {
        return Array.from(this.select()).some(el => el.classList.contains(className))
    }

    append(...elements) {
        this.select().forEach(el => {
            elements.forEach(element => {
                if (element instanceof Node) el.appendChild(element.cloneNode(true))
                else el.insertAdjacentHTML("beforeend", element)
            })
        })

        return this
    }

    prepend(...elements) {
        this.select().forEach(el => {
            elements.forEach(element => {
                if (element instanceof Node) el.insertBefore(element.cloneNode(true), el.firstChild)
                else el.insertAdjacentHTML("afterbegin", element)
            })
        })

        return this
    }

    remove() {
        this.select().forEach(el => el.remove())
        return this
    }

    html(content) {
        this.select().forEach(el => el.innerHTML = content)
        return this
    }

    text(content) {
        this.select().forEach(el => el.textContent = content)
        return this
    }

    attr(attributeName, value) {
        if (arguments.length === 2) {
            this.select().forEach(el => el.setAttribute(attributeName, value))
            return this
        } else return this.select()[0]?.getAttribute(attributeName) || null
    }

    select() {
        return document.querySelectorAll(this.selector)
    }
}

window.$q = selector => new FloorqueryDOManipulator(selector)
