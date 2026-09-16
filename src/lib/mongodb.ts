import mongoose from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var mongooseConnection: Promise<typeof mongoose> | undefined;
}

export async function connectMongo() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (!global.mongooseConnection) {
    global.mongooseConnection = mongoose.connect(uri, {
      dbName: "udaipur_companion_service"
    });
  }

  return global.mongooseConnection;
}
