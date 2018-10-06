function jsonRetinaTemplate(data) {
  // Convert retina groups from an array into an object
  var retinaGroups = data.retina_groups;
  var retinaGroupObj = {};
  retinaGroups.forEach(function (retinaGroup) {
    // Grab the name and store the retina group under it
    var name = retinaGroup.name;
    retinaGroupObj[name] = retinaGroup;

    // Delete the names and indicies from the retinaGroup
    delete retinaGroup.name;
    delete retinaGroup.index;
    delete retinaGroup.normal.name;
    delete retinaGroup.retina.name;
  });

  // Stringify the retinaGroupObj
  var retStr = JSON.stringify(retinaGroupObj, null, 4);

  // Convert retina groups from an array into an object
  var retina3xGroups = data.retina3x_groups;
  var retina3xGroupObj = {};

  retina3xGroups.forEach(function (retina3xGroup) {
    // Grab the name and store the retina group under it
    var name = retina3xGroup.name;
    retina3xGroupObj[name] = retina3xGroup;

    // Delete the names and indicies from the retinaGroup
    delete retina3xGroup.name;
    delete retina3xGroup.index;
    delete retina3xGroup.normal.name;
    delete retina3xGroup.retina.name;
  });

  // Stringify the retinaGroupObj
  retStr = retStr.concat(JSON.stringify(retina3xGroupObj, null, 4));

  // Return the stringified JSON
  // return retStr;
  return retStr;
}

// Export our JSON template
module.exports = jsonRetinaTemplate;
