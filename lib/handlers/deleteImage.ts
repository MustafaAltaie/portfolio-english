import cloudinary from '../cloudinary';

export async function deleteImage({
  filename,
  folderPath,
  resourceType = 'image',
}: {
  filename: string;
  folderPath: string;
  resourceType?: 'image' | 'video' | 'raw';
}) {
  const publicId = `${folderPath}/${filename.split('.')[0]}`;

  try {
    const { result } = await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
      invalidate: true,
    });

    if (result === 'ok') {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Deletion failed' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (err) {
    console.error('Cloudinary delete error:', err);
    return new Response(
      JSON.stringify({
        error: err instanceof Error ? err.message : 'Internal server error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}