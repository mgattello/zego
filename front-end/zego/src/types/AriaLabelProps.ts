export type AriaLabelProps = {
    /**
     * <input>: use it instead of a <label> when you're using non-standard layouts or custom UI that makes <label for="..."> impractical.
     *
     * <button>: use it when the button doesn’t have visible text but has a label nearby (e.g., an icon button with a hidden text label):
     *
     * <form>: use it when the form’s title is outside the form, or you want to associate a visible label with the form explicitly.
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
