function jsonArrayTemplate(data) {
  // Clean up the retina group sprite names/indicies
  var retinaGroups = data.retina_groups;
  retinaGroups.forEach(function cleanRetinaGroup (retinaGroup) {
    delete retinaGroup.index;
    delete retinaGroup.normal.name;
    delete retinaGroup.retina.name;
  });

  // Stringify and return the groups
  var retStr = JSON.stringify(retinaGroups, null, 4);

  // Clean up the retina group sprite names/indicies
  var retina3xGroups = data.retina3x_groups;
  retina3xGroups.forEach(function cleanRetinaGroup (retina3xGroup) {
    delete retina3xGroup.index;
    delete retina3xGroup.normal.name;
    delete retina3xGroup.retina.name;
  });

  // Stringify and return the groups
  retStr = retStr.concat(JSON.stringify(retina3xGroups, null, 4));

  return retStr;
}

// Export our JSON template
module.exports = jsonArrayTemplate;