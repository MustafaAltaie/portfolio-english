import dbConnect from "../../../../../lib/mongodb";
import { BackendSkill } from "../../../../../lib/models/SkillModel";

export async function POST(req: Request) {
  await dbConnect();
  const data = await req.json();
  const newItem = new BackendSkill(data);
  await newItem.save();
  return new Response(JSON.stringify(newItem), { status: 201 });
}

export async function GET() {
  await dbConnect();
  const items = await BackendSkill.find({});
  return new Response(JSON.stringify(items), { status: 200 });
}

export async function PUT(req: Request) {
    await dbConnect();
    const updatedBackendSkill = await req.json();
    await BackendSkill.deleteMany({});
    const insertedBackendSkill = await BackendSkill.insertMany(updatedBackendSkill);
    return new Response(JSON.stringify(insertedBackendSkill), { status: 200 });
}