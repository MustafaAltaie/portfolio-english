import { Readable } from 'stream';
import cloudinary from '../cloudinary';

export async function uploadImageWithReplace({
  file,
  oldImageName,
  folderPath,
}: {
  file: File;
  oldImageName: string;
  folderPath: string;
}) {
  if (!file || !(file instanceof File)) {
    return new Response(JSON.stringify({ error: 'No file uploaded' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const publicId = file.name.replace(/\.[^/.]+$/, '');
  const oldPublicId = oldImageName.replace(/\.[^/.]+$/, '');

  try {
    await cloudinary.uploader.destroy(`${folderPath}/${oldPublicId}`);

    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: folderPath,
          public_id: publicId,
          overwrite: true,
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      Readable.from(buffer).pipe(uploadStream);
    });

    return new Response(JSON.stringify({ success: true, data: uploadResult }), {
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
