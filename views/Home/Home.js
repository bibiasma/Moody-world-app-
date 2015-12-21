var avaliableMoods = ko.observableArray(["","sad","happy","confused","scared","angry"]);
var currentVal = ko.observable(1);
var current = avaliableMoods()[self.currentVal()];

