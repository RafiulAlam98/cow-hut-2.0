import { Schema, model } from 'mongoose'
import { AdminModel, IAdmin } from './admin.interface'

const AdminSchema = new Schema<IAdmin>(
  {
    adminId: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Admin = model<IAdmin, AdminModel>('Admin', AdminSchema)
