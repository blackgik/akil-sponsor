import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const personalizationSchema = new Schema(
  {
    general_info: {
      organization_name: { type: String, trim: true, default:""  },
      title: { type: String, trim: true, lowercase: true },
      about_you: { type: String, trim: true, default:"" },
      about_organization: { type: String, trim: true, default: '' },
      goals: { type: String, default: '' },
      url_name: { type: String, trim: true, lowercase: true, default: '', unique: true },
      language: { type: String, trim: true, lowercase: true, default: '' }
    },
    goals_and_objective: {
      goals: [
        {
          title: { type: String, trim: true, default: '' },
          content: { type: String, trim: true, default: '' }
        }
      ],
      objective: { type: String, trim: true, default: '' }
    },
    brand_info: {
      logo: { type: String, trim: true, default: '' },
      personal_image: { type: String, trim: true, default: '' },
      colors: { type: Schema.Types.Mixed }
    },
    social_media: {
      fb_url: { type: String, trim: true, default: '' },
      x_url: { type: String, trim: true, default: '' },
      linkedin_url: { type: String, trim: true, default: '' },
      youtube_url: { type: String, trim: true, default: '' },
      tiktok_url: { type: String, trim: true, default: '' },
      other_url: { type: String, trim: true, default: '' }
    },
    has_paid: { type: Boolean, default: false },
    sponsor_id: { type: Schema.Types.ObjectId, required: true, ref: 'Organization' }
  },
  { timestamps: true }
);

export default model('Personalization', personalizationSchema);
