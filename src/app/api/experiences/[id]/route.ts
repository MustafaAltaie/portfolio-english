import Experience from '../../../../../lib/models/ExperienceModel';
import { updateModel, deleteModel } from '../../../../../lib/handlers/updateModel';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  return updateModel(req, params.id, Experience);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  return deleteModel(params.id, Experience);
}