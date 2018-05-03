import MessageList from './components/MessageList';
import ReactDOM from 'react-dom';

angular.module("MailboxApp",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/inbox");
    $stateProvider.state("inbox",{
        url: "/inbox",
        //templateUrl:"partials/inbox.html",
        controller: function($scope, messageStore, $element){
            //console.log("Inbox.");
            //$scope.messages = messageStore.getMessages();
        
           var messages =  messageStore.getMessages();
           //console.log($element[0]);
           // Render the main component into the dom
            ReactDOM.render(<MessageList messages={messages}/>, $element[0]);
        } 
    }).
    state("message",{
        url: "/message/:id",
        templateUrl:"partials/message.html",
        controller: function($scope, messageStore, $stateParams){
            //console.log("In message controller");
            $scope.message = messageStore.getMessages()
            .filter(function(message){
                return message.id == $stateParams.id;
            })[0];
            
        }
    })
})
.service("messageStore", function(){
    var messages = [];
    var sampleSize = 100;
    for(var i=0; i< sampleSize; i++){
        messages.push({
            sender : "test"+i+"@gmail.com",
            date : Date.now() - i * 2400000000,
            id:i,
            subject:"subject"+i,
            body: "Hey"
        })
    }
    return {
        getMessages: function(){
            return messages;
        }
    }
})

