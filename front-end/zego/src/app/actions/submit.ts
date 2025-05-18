'use server';
export async function submit(state: unknown, formData: FormData) {
    // NOTE: Make it more dynamic. Passing config as function property.
    const formObj = {
        carInsurance: formData.get('car-insurance'),
        carDeliverInsurance: formData.get('car-deliver-insurance'),
        privateHireInsurance: formData.get('private-hire-insurance'),
    };

    return formObj;
}
