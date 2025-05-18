/**
 * @jest-environment node
 */
import { GET } from './route';
import { ConfigGetZodSchema } from './route.schema';

describe('/api/v1/config GET', () => {
    it('returns expected config json', async () => {
        const response = await GET();
        const responseBody = await response.json();

        expect(response.status).toBe(200);
        expect(responseBody).toHaveProperty('version', '1.0.0');
        expect(responseBody).toHaveProperty('form');
        expect(() => ConfigGetZodSchema.parse(responseBody)).not.toThrow();
    });

    it('throws when version format does not follow schema', async () => {
        const response = await GET();
        const responseBody = await response.json();

        responseBody.version = 'a.b.c';

        expect(() => ConfigGetZodSchema.parse(responseBody)).toThrow();
    });

    it('throws when version format does not esist', async () => {
        const response = await GET();
        const responseBody = await response.json();

        responseBody.version = '';

        expect(() => ConfigGetZodSchema.parse(responseBody)).toThrow();
    });

    it('throws when form format does not exist', async () => {
        const response = await GET();
        const responseBody = await response.json();

        responseBody.form = {};

        expect(() => ConfigGetZodSchema.parse(responseBody)).toThrow();
    });

    it('throws when form format does not follow schema', async () => {
        const response = await GET();
        const responseBody = await response.json();

        responseBody.form = {
            message: 'test',
        };

        expect(() => ConfigGetZodSchema.parse(responseBody)).toThrow();
    });
});
