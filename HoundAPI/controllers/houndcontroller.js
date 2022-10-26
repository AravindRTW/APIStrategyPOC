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

  const specType = req.params?.pruspectype;
  var myDocument ;
  try {

if(req.headers['content-type'].toLowerCase() == 'application/json')
{
//JSON
     const reqJSON =  JSON.stringify(req.body);
     myDocument = new Document(reqJSON,  Parsers.Json, "APIJSON-PAYLOAD",);

}
else if (req.headers['content-type'].toLowerCase()== 'text/yaml') {

  // Raw text -
  myDocument = new Document(req.body, Parsers.Yaml, "APIYAML-PAYLOAD",);  
}
else
{
  res.send("Invalid Message Format. Accepted formats are JSON and YAML only.");

}

 const spectral = new Spectral();   
  var rulesetFilepath = '';

 // Route to the right rule set
 if(specType.toLowerCase()== 'oas')
 {
  rulesetFilepath = path.join(process.env.HOUNDEXECPATH, "rulesets/oas/oasrulesets.yaml");

 }
 else if(specType.toLowerCase()== 'async')
 {
  rulesetFilepath = path.join(process.env.HOUNDEXECPATH, "rulesets/async/asyncrulesets.yaml");
 }
else
{
  res.send("Invalid file spec type - parameter");

}



     spectral.setRuleset(await bundleAndLoadRuleset(rulesetFilepath, { fs, fetch }));
     spectral.run(myDocument).then((eachres) => {
      res.json(eachres);  
     }); 
    }
    catch(err) {
      res.send(err,"Critical -  Lintapi failure " );
    }

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