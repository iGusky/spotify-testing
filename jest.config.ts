// jest.config.ts
import type {Config} from 'jest';

export default async (): Promise<Config> => {
    return {
        moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
        transform: {
            '^.+\\.ts?$': 'ts-jest',
            "^.+\\.vue$": "@vue/vue3-jest",
        },
        verbose: true,
    };
};