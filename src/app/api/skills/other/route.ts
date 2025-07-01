import dbConnect from "../../../../../lib/mongodb";
import { OtherSkill } from "../../../../../lib/models/SkillModel";

export async function POST(req: Request) {
  await dbConnect();
  const data = await req.json();
  const newItem = new OtherSkill(data);
  await newItem.save();
  return new Response(JSON.stringify(newItem), { status: 201 });
}

export async function GET() {
  await dbConnect();
  const items = await OtherSkill.find({});
  return new Response(JSON.stringify(items), { status: 200 });
}

export async function PUT(req: Request) {
    await dbConnect();
    const updatedOtherSkill = await req.json();
    await OtherSkill.deleteMany({});
    const insertedOtherSkill = await OtherSkill.insertMany(updatedOtherSkill);
    return new Response(JSON.stringify(insertedOtherSkill), { status: 200 });
}