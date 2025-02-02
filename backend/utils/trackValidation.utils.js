import { z } from 'zod';

const trackValidation = z.object({
    songTitle: z.string()
        .min(1, "Song title is required")
        .max(200, "Song title cannot exceed 200 characters")
        .trim(),

    artistName: z.string()
        .min(1, "Artist name is required")
        .max(200, "Artist name cannot exceed 200 characters")
        .trim(),

    genre: z.enum([
        'Bollywood', 'Classical', 'Marathi', 'Folk', 'Ghazal', 'Bhajan', 'Bhojpuri', 'Indie Pop', 'Punjabi', 'Hindustani', 'Fusion', 'Regional Songs', 'Instrumental', 'Wedding Songs', 'Dance Numbers', 'Patriotic'
    ], {
        errorMap: () => ({ message: "Invalid genre selected" })
    }),

    track: z.object({
        mimetype: z.string()
            .startsWith('audio/', 'File must be an audio file')
            .refine(mime => [
                'audio/mp3',
                'audio/mpeg',
                'audio/wav',
                'audio/x-wav',
                'audio/m4a',
                'audio/aac',
                'audio/mpeg3'
            ].includes(mime.toLowerCase()), {
                message: 'Unsupported audio format. Use MP3, WAV, M4A, or AAC'
            }),
        size: z.number()
            .max(60 * 1024 * 1024, "File size must not exceed 60MB"),
    }),

    image: z.object({
        mimetype: z.string()
            .startsWith('image/', 'File must be an image')
            .refine(mime => [
                'image/jpeg',
                'image/jpg',
                'image/png',
                'image/webp'
            ].includes(mime.toLowerCase()), {
                message: 'Unsupported image format. Use JPG, JPEG, PNG, or WebP'
            }),
        size: z.number()
            .max(5 * 1024 * 1024, "Image size must not exceed 5MB"),
    })
});

export default trackValidation;