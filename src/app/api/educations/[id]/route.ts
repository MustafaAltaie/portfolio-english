import Education from '../../../../../lib/models/EducationModel';
import { updateModel, deleteModel } from '../../../../../lib/handlers/updateModel';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  return updateModel(req, params.id, Education);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  return deleteModel(params.id, Education);
}