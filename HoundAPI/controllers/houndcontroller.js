'use strict';

import mongoose from 'mongoose';
const PrudentialMetaData = mongoose.model('PrudentialMetaData');

// Spectral Packages

import * as fs from "node:fs";
import { fileURLToPath } from "node:url";
import * as path from "node:path";
import { join } from "path";
import { bundleAndLoadRuleset } from "@stoplight/spectral-ruleset-bundler/with-loader";
import Parsers from "@stoplight/spectral-parsers"; // make sure to install the package if you intend to use default parsers!
import spectralCore from "@stoplight/spectral-core";
const { Spectral, Document } = spectralCore;
import spectralRuntime from "@stoplight/spectral-runtime";
const { fetch } = spectralRuntime;



export const lint_pruapi = async function(req, res) {
  const myJSON = JSON.stringify(req.body);
  const myDocument = new Document(
    myJSON,
     Parsers.Json,
     "APIJSONPAYLOAD",
   ); 
    const spectral = new Spectral();   
     const rulesetFilepath = path.join(process.env.HOUNDEXECPATH, ".spectral.yaml");
     spectral.setRuleset(await bundleAndLoadRuleset(rulesetFilepath, { fs, fetch }));
     spectral.run(myDocument).then((eachres) => {
      // try catch for run command  
      res.json(eachres);
     });


};


export const list_all_prumetadata = async function(req, res) {
   
    

        PrudentialMetaData.find({}, function(err, pruMetaData) {
      if (err)
        res.send(err);
      res.json(pruMetaData);
    });
  };
  


 
  export const create_a_prumetadata = async function(req, res) {
    var new_pruMetaData = new Task(req.body);
    new_pruMetaData.save(function(err, pruMetaData) {
      if (err)
        res.send(err);
      res.json(pruMetaData);
    });
  };



export const read_a_prumetadata = function(req, res) {
  PrudentialMetaData.findById(req.params.prumetadataId, function(err, pruMetaData) {
    if (err)
      res.send(err);
    res.json(pruMetaData);
  });
};


export const update_a_prumetadata = function(req, res) {
  PrudentialMetaData.findOneAndUpdate({_id: req.params.prumetadataId}, req.body, {new: true}, function(err, pruMetaData) {
    if (err)
      res.send(err);
    res.json(pruMetaData);
  });
};


export const delete_a_prumetadata = function(req, res) {


  PrudentialMetaData.remove({
    _id: req.params.prumetadataId
  }, function(err, pruMetaData) {
    if (err)
      res.send(err);
    res.json({ message: 'API MetaData successfully deleted' });
  });
};