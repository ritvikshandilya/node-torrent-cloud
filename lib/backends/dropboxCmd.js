var async = require("async");
var Dropbox = require("dropbox");

exports.vars = ["KEY", "SECRET", "TOKEN"];

exports.init = function () {
  var client = new Dropbox.Client({
    key: "x1aecayt4i26bsf",
    secret: "c5pvkgwybpqt8nx",
    token: "GhjEdThBdU4AAAAAAAAASWqwXpm0ydc-I9bYNrYac1yN9rCBAes2960Rq2gnkbIZ"
  });

  client.authDriver(new Dropbox.AuthDriver.NodeServer(8191));

  client.authenticate(function(error, client) {
    if (error) {
      // Replace with a call to your own error-handling code.
      //
      // Don't forget to return from the callback, so you don't execute the code
      // that assumes everything went well.
      return showError(error);
    }

    // Replace with a call to your own application code.
    //
    // The user authorized your app, and everything went well.
    // client is a Dropbox.Client instance that you can use to make API calls.
  });
}


/*
var client = new Dropbox.Client({
    key: "x1aecayt4i26bsf",
    secret: "c5pvkgwybpqt8nx",
    token: "GhjEdThBdU4AAAAAAAAASWqwXpm0ydc-I9bYNrYac1yN9rCBAes2960Rq2gnkbIZ"
});

client.authDriver(new Dropbox.AuthDriver.NodeServer(8191));

client.authenticate(function(error, client) {
  if (error) {
    // Replace with a call to your own error-handling code.
    //
    // Don't forget to return from the callback, so you don't execute the code
    // that assumes everything went well.
    return showError(error);
  }

  // Replace with a call to your own application code.
  //
  // The user authorized your app, and everything went well.
  // client is a Dropbox.Client instance that you can use to make API calls.
});

var showError = function(error) {
  switch (error.status) {
  case Dropbox.ApiError.INVALID_TOKEN:
    // If you're using dropbox.js, the only cause behind this error is that
    // the user token expired.
    // Get the user through the authentication flow again.
    console.log("case 1");
    break;

  case Dropbox.ApiError.NOT_FOUND:
    // The file or folder you tried to access is not in the user's Dropbox.
    // Handling this error is specific to your application.
    console.log("case 2");
    break;

  case Dropbox.ApiError.OVER_QUOTA:
    // The user is over their Dropbox quota.
    // Tell them their Dropbox is full. Refreshing the page won't help.
    console.log("case 3");
    break;

  case Dropbox.ApiError.RATE_LIMITED:
    // Too many API requests. Tell the user to try again later.
    // Long-term, optimize your code to use fewer API calls.
    console.log("case 4");
    break;

  case Dropbox.ApiError.NETWORK_ERROR:
    // An error occurred at the XMLHttpRequest layer.
    // Most likely, the user's network connection is down.
    // API calls will not succeed until the user gets back online.
    console.log("case 5");
    break;

  case Dropbox.ApiError.INVALID_PARAM:
  case Dropbox.ApiError.OAUTH_ERROR:
  case Dropbox.ApiError.INVALID_METHOD:
  default:
    // Caused by a bug in dropbox.js, in your application, or in Dropbox.
    // Tell the user an error occurred, ask them to refresh the page.
    console.log("case 6");
  }
};

client.readFile("hello_world.txt", function(error, data) {
  if (error) {
    return showError(error);  // Something went wrong.
  }

  console.log(data);  // data has the file's contents
});
*/