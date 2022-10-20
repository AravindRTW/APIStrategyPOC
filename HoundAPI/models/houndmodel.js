'use strict';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;


var MetaDetaSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the Metadata'
  },
  code: {
    type: String,
    required: 'Kindly enter the code of the Metadata'
  },
  description: {
    type: String,
    required: 'Kindly enter the description of the Metadata'
  },
  sourcesystem: {
    type: String,
    required: 'Kindly enter the src systen for the Metadata'
  },
  
  language: {
    type: [{
      type: String,
      enum: ['english', 'spanish', 'chinese']
    }],
    default: ['english']
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  Updated_date: {
    type: Date,
    default: Date.now
  }
});



export default mongoose.model('PrudentialMetaData', MetaDetaSchema);