import cloudinary from '../cloudinary';
import { Readable } from 'stream';

export async function uploadImage({
  file,
  folderPath,
  resourceType = 'image',
}: {
  file: File;
  folderPath: string;
  resourceType?: 'image' | 'video' | 'raw';
}) {
  if (!file || !(file instanceof File)) {
    return new Response(JSON.stringify({ error: 'No file uploaded' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const publicId = file.name.split('.').slice(0, -1).join('');

  try {
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: folderPath,
          public_id: publicId,
          resource_type: resourceType,
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      Readable.from(buffer).pipe(uploadStream);
    });

    return new Response(JSON.stringify({ success: true, data: result }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Cloudinary upload error:', err);
    return new Response(
      JSON.stringify({
        error: err instanceof Error ? err.message : 'Upload failed',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
