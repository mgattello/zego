import response from '../../../../data/config.json';
import { NextResponse } from 'next/server';
import { ConfigGetZodSchema } from './route.schema';
import { z } from 'zod';

export async function GET() {
    try {
        const configValidation = ConfigGetZodSchema.safeParse(response);

        if (configValidation.success) {
            return NextResponse.json(configValidation.data, { status: 200 });
        } else {
            throw new Error(configValidation.error.message);
        }
    } catch (err: unknown) {
        if (err instanceof z.ZodError) {
            return NextResponse.json(err.errors, { status: 500 });
        }

        if (err instanceof Error) {
            return NextResponse.json(err.message, { status: 500 });
        }

        return NextResponse.json(err, { status: 500 });
    }
}
