import response from '../../../../data/config.json';
import { NextResponse } from 'next/server';
import { ConfigGetZodSchema } from './route.schema';

export async function GET() {
    try {
        const configValidation = ConfigGetZodSchema.safeParse(response);

        if (configValidation.success) {
            return NextResponse.json(configValidation.data, { status: 200 });
        } else {
            throw new Error(configValidation.error.message);
        }
    } catch (err: unknown) {
        return NextResponse.json(err, { status: 500 });
    }
}
