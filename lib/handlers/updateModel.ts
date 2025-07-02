import dbConnect from "../mongodb";

export async function updateModel(req: Request, id: string, Model: any) {
  await dbConnect();
  const data = await req.json();

  try {
    const updated = await Model.findByIdAndUpdate(id, data, { new: true });
    if (!updated) {
      return new Response(JSON.stringify({ message: 'Not Found' }), { status: 404 });
    }
    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (error) {
    console.error('Update error:', error);
    return new Response(JSON.stringify({ error: 'Failed to update' }), { status: 500 });
  }
}

export async function deleteModel(id: string, Model: any) {
  await dbConnect();
  try {
    const deletedItem = await Model.findByIdAndDelete(id);
    if (!deletedItem) {
      return new Response(JSON.stringify({ message: 'Not Found' }), { status: 404 });
    }

    return new Response(JSON.stringify(deletedItem), { status: 200 });
  } catch (error) {
    console.error('Error occured:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete item' }), { status: 500 });
  }
}