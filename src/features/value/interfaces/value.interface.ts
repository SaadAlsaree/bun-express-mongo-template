import type { ObjectId } from "mongodb";


export interface IValue extends Document {
  _id?: ObjectId | string;
  value: number;
  name: string;
}
