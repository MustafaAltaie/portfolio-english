import dbConnect from "../../../../lib/mongodb";
import User from "../../../../lib/models/UserModel";

export async function POST(req: Request) {
  await dbConnect();
  const data = await req.json();
  const newItem = new User(data);
  await newItem.save();
  return new Response(JSON.stringify(newItem), { status: 201 });
}

export async function GET() {
  await dbConnect();
  const items = await User.find({});
  return new Response(JSON.stringify(items), { status: 200 });
}