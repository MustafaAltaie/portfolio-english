import dbConnect from "../../../../../lib/mongodb";
import { FrontendSkill } from "../../../../../lib/models/SkillModel";

export async function POST(req: Request) {
  await dbConnect();
  const data = await req.json();
  const newItem = new FrontendSkill(data);
  await newItem.save();
  return new Response(JSON.stringify(newItem), { status: 201 });
}

export async function GET() {
  await dbConnect();
  const items = await FrontendSkill.find({});
  return new Response(JSON.stringify(items), { status: 200 });
}

export async function PUT(req: Request) {
    await dbConnect();
    const updatedFrontendSkill = await req.json();
    await FrontendSkill.deleteMany({});
    const insertedFrontendSkill = await FrontendSkill.insertMany(updatedFrontendSkill);
    return new Response(JSON.stringify(insertedFrontendSkill), { status: 200 });
}