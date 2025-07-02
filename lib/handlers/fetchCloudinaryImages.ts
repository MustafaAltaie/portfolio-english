import cloudinary from '../cloudinary';

export async function fetchCloudinaryImages({
  folderPath,
  resourceType = 'image',
  maxResults = 30,
}: {
  folderPath: string;
  resourceType?: 'image' | 'video' | 'raw';
  maxResults?: number;
}) {
  try {
    const result = await cloudinary.search
      .expression(`folder:${folderPath} AND resource_type:${resourceType}`)
      .sort_by('public_id', 'desc')
      .max_results(maxResults)
      .execute();

    const urls = result.resources.map((file: { secure_url: string }) => file.secure_url);

    return new Response(JSON.stringify(urls), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ Cloudinary fetch error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch images' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}