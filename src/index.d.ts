declare class FloorqueryDOManipulator {
    private selector: string
    constructor(selector: string)

    /**
     * Toggles a class on the selected element(s).
     * @param className Class to toggle
     */
    class(className: string): FloorqueryDOManipulator

    /**
     * Whether the selected element(s) have a class. Can be used alongside class(string) for extra safety.
     * @param className Class to check for
     */
    hasClass(className: string): boolean

    /**
     * Appends an element to the selected element(s).
     * @param element Element to append
     */
    append(elements: (string | Node)[]): FloorqueryDOManipulator

    /**
     * Prepends an element to the selected element(s).
     * @param element Element to prepend
     */
    prepend(elements: (string | Node)[]): FloorqueryDOManipulator

    /**
     * Removes the selected element(s).
     */
    remove(): FloorqueryDOManipulator

    /**
     * Sets the HTML content of the selected element(s).
     * @param content HTML content to set
     */
    html(content: string): FloorqueryDOManipulator

    /**
     * Sets the text content of the selected element(s).
     * @param content Text content to set
     */
    text(content: string): FloorqueryDOManipulator

    /**
     * Gets or sets an attribute of the selected element(s).
     * @param attributeName Attribute name
     * @param value Attribute value (optional)
     */
    attr(attributeName: string, value: string): FloorqueryDOManipulator
    attr(attributeName: string): string | null

    /**
     * Helper function to select vanilla elements based on selector. Not intended for use outside of internals.
     */
    private select(): Element[]
}

declare global {
    declare function $q(selector: string): FloorqueryDOManipulator
}

export { }
