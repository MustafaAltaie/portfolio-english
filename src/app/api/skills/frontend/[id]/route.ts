import { FrontendSkill } from '../../../../../../lib/models/SkillModel';
import { updateModel, deleteModel } from '../../../../../../lib/handlers/updateModel';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  return updateModel(req, params.id, FrontendSkill);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  return deleteModel(params.id, FrontendSkill);
}