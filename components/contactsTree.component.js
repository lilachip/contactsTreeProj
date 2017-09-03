

var contactsTreeController = function(contactsTreeService) {
	var self = this;

    self.isActive = [];
    self.contactsList = contactsTreeService.data;
   
    self.toggleGroup = function(contactId) {
        self.isActive[contactId] = !self.isActive[contactId];
    }  

    self.isGroupCanShow = function(group) {
    	return group.contacts && self.isActive[group.id];
    }  
}

angular.module('contactsTreeApp').component('contactsTree', {
    templateUrl: 'components/contactsTree.template.html',
    controller: contactsTreeController
     });