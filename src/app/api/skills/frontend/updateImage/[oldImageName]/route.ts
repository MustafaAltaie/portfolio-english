import { NextRequest } from 'next/server';
import { uploadImageWithReplace } from '../../../../../../../lib/handlers/uploadImageWithReplace';

export async function POST(
  req: NextRequest,
  { params }: { params: { oldImageName: string } }
) {
  const formData = await req.formData();
  const file = formData.get('image') as File;

  return uploadImageWithReplace({
    file,
    oldImageName: params.oldImageName,
    folderPath: 'portfolio/skills/frontend',
  });
}