// mongodb+srv://mudassirinoxent:demo1234@cluster0.eefrrqf.mongodb.net/
// mongodb://localhost:27017

import { connect } from "mongoose";

const connectToMongo = async () => {
  try {
    // await connect('mongodb+srv://mudassirinoxent:aptech2111A@cluster0.eefrrqf.mongodb.net/enotebook');
    await connect('mongodb://localhost:27017/enotebook');
    console.log("---***Database Connected Successfully***---")
  } catch (error) {
    console.log(error);
  }
}

export default connectToMongo;


