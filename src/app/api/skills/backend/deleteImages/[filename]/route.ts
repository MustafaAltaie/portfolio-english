import { deleteImage } from "../../../../../../../lib/handlers/deleteImage";

export async function DELETE(_: Request, { params }: { params: { filename: string } }) {
  return deleteImage({
    filename: params.filename,
    folderPath: 'portfolio/skills/backend',
  });
}