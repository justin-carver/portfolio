import { Metadata } from 'next';
export const InitMetadata = (args: Metadata): Metadata => {
    return { ...args };
};
