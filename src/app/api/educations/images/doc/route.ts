import { uploadImage } from '../../../../../../lib/handlers/uploadImage';
import { NextRequest } from 'next/server';
import { fetchCloudinaryImages } from '../../../../../../lib/handlers/fetchCloudinaryImages';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('image') as File;

  return uploadImage({
    file,
    folderPath: 'portfolio/educations/doc',
  });
}

export async function GET() {
  return fetchCloudinaryImages({
    folderPath: 'portfolio/educations/doc',
  });
}