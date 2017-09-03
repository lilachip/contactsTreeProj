

var contactsTreeController = function(contactsTreeService) {
    //keeping the scope obj localy
	var self = this;

    self.isActive = [];
    //gets the data from the service - at the moment staticly...
    self.contactsList = contactsTreeService.data;
    //toggle items header
    self.toggleGroup = function(contactId) {
        self.isActive[contactId] = !self.isActive[contactId];
    }  
   //shows elements according to group's choice
    self.isGroupCanShow = function(group) {
    	return group.contacts && self.isActive[group.id];
    }  
}

angular.module('contactsTreeApp').component('contactsTree', {
    templateUrl: 'components/contactsTree.template.html',
    controller: contactsTreeController
     });