export type AriaLabelProps = {
    /**
     * Use when the label is visually present but not using <label>. i.e.:
     *
     * <span id="label-username">Username</span>
     * <input ... aria-labbelledby="label-username" name="username"/>
     */
    ariaLabelledBy?: string;
    /**
     * <input>: use when input has no visible <label> or want to override the visible text with something more descriptive.
     *
     * <button>: use when the button does not have visible text or when the visible content is not descriptive enough.
     *
     * <form>: use when the form has no visible title or it's elsewhere in the page.
     */
    ariaLabel?: string;
    /**
     * <input>: use aria-describedby to associate hints, help text, or validation errors with the input.
     *
     * <button>: use if a button needs supplemental instructions, but not as its main label.
     *
     * <form>: use to provide form-wide guidance that’s not a label.
     */
    ariaDescribedBy?: string;
};
