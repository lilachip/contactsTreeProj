var contactsTreeController = function (contactsTreeService) {
    var _this = this;

    //gets the data from the service - at the moment statically...
    _this.contactList = contactsTreeService.data;
    
    _this.expandable = function (contact) {
        return /^group$/i.test(contact.type) && Object.prototype.toString.call(contact.contacts) === '[object Array]';
    }

    _this.toggleExpansion = function (contact) {
        if (_this.expandable(contact)) {
            contact.expanded = !contact.expanded;
        }
    }
}

angular.module('contactsTreeApp').component('contactsTree', {
    templateUrl: 'components/contactsTree.template.html',
    controller: contactsTreeController
});