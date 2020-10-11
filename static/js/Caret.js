"use strict";

class Caret {
    /** @private {EditorPosition} */
    #pos;

    /**
     * This represents position visually, where a user is typing.
     * @param {string} id - unique identifier string
     * @param {string} label - title given by user
     * @param {EditorPosition} pos - position inside editor
     */
    constructor(id, label, pos) {
        this.id = id;
        this.label = label;
        this.#pos = pos;
    }

    /**
     * Set position of this caret.
     * @param {EditorPosition} pos 
     */
    setPos(pos) {
        this.#pos = pos;
        // TODO - change DOM element
    }

    /**
     * Returns current position of this caret.
     * @return {EditorPosition} 
     */
    getPos() {
        return this.#pos;
    }
}