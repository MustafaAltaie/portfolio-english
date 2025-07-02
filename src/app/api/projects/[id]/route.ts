import Project from '../../../../../lib/models/ProjectModel';
import { updateModel, deleteModel } from '../../../../../lib/handlers/updateModel';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  return updateModel(req, params.id, Project);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  return deleteModel(params.id, Project);
}