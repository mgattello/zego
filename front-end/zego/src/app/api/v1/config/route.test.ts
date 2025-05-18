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
        expect(responseBody).toHaveProperty('config');
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

    it('throws when config format does not exist', async () => {
        const response = await GET();
        const responseBody = await response.json();

        responseBody.config = {};

        expect(() => ConfigGetZodSchema.parse(responseBody)).toThrow();
    });

    it('throws when config format does not follow schema', async () => {
        const response = await GET();
        const responseBody = await response.json();

        responseBody.config = {
            message: 'test',
        };

        expect(() => ConfigGetZodSchema.parse(responseBody)).toThrow();
    });
});
