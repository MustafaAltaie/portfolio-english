import dbConnect from "../../../../lib/mongodb";
import Project from "../../../../lib/models/ProjectModel";

export async function POST(req: Request) {
  await dbConnect();
  const data = await req.json();
  const newItem = new Project(data);
  await newItem.save();
  return new Response(JSON.stringify(newItem), { status: 201 });
}

export async function GET() {
  await dbConnect();
  const items = await Project.find({});
  return new Response(JSON.stringify(items), { status: 200 });
}

export async function PUT(req: Request) {
    await dbConnect();
    const updatedProject = await req.json();
    await Project.deleteMany({});
    const insertedProject = await Project.insertMany(updatedProject);
    return new Response(JSON.stringify(insertedProject), { status: 200 });
}