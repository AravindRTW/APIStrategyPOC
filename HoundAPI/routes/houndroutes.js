'use strict';



import { lint_pruapi , create_a_prumetadata , read_a_prumetadata , update_a_prumetadata , delete_a_prumetadata, list_all_prumetadata} from '../controllers/houndcontroller.js';


const routes = function(app) {



  // Hound Routes


  app.route('/lintapi/:pruspectype')
  .post(lint_pruapi);

  app.route('/prumetadata')
    .get(list_all_prumetadata)
    .post(create_a_prumetadata);


  app.route('/prumetadata/:prumetadataId')
    .get(read_a_prumetadata)
    .put(update_a_prumetadata)
    .delete(delete_a_prumetadata);
};


export default routes;