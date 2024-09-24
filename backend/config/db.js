import mongoose from  'mongoose';

export const connectDB =  async () => {
  await mongoose.connect("mongodb+srv://adrija:adrija24@cluster0.op17u.mongodb.net/FOODY-MEE-PROJECT").then(()=>console.log("DB Connected"));
}
