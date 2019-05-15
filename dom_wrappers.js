
class DomWrapper {
    constructor(elementName, optionalStyles = {}) {
        this.element = document.createElement(elementName);
        this.setStyles(optionalStyles);
    }
    setStyles(styles) {
        Object.entries(styles).forEach(([key, attrib]) => this.element.style[key] = attrib);
    }
    appendChild(child) {
        this.element.appendChild(child);
    }
}

class UpdatableDomWrapper extends DomWrapper {
    constructor(elementName, optionalStyles) {
        super(elementName, optionalStyles);
    }
    setHtml(str) {
        this.element.innerHTML = str;
    }
}