(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let Dept = function () {
  this.name = '';
  this.location = '';
};

Dept.prototype.setName = function (name) {
  this.name = name;
};

Dept.prototype.setLocation = function (loc) {
  this.location = loc;
};

Dept.FieldOffice = function (name, loc) {
  this.setName(name);
  this.setLocation(loc);
};

Dept.FieldOffice.prototype = new Dept();

// Create a two-level prototype chain for creating departments in your business. Start off with a `Department` function. Then create two other functions named `FieldOffice`, and `Headquarters` that have `Department` on their prototype chain.

// 1. Every employee should have a first and last name.
// 1. Every department should have a name.
// 1. Every employee should be assigned to either the `FieldOffice` or `Headquarters` department. This is a `has-a` relationship.
// 1. `Clinician` employees should have a property for their area of medical expertise (e.g. physical therapist, phrenologist, anesthesiologist, etc.)
// 1. `Operations` employees should have a property for their area of responsibility (e.g. IT, revenue, compliance, etc.)
// 1. Every field office should have a unique city.
// 1. Create a minimum of 4 employees - 2 clinicians, and 2 operations - that have been assigned to a specific department.
// 1. Output the following information to the console for each employee.
//     1. Full name
//     1. Department name
//     1. Expertise/responsibility

module.exports = Dept;
},{}],2:[function(require,module,exports){
"use strict";

var Dept = require('./departments.js');

// Create a two-level prototype chain for creating employees in your business. Start off with an `Employee` function. Then create two other functions named `Clinician`, and `Operations` that have `Employee` on their prototype chain.

let Employee = function(){
  this.firstName = '';
  this.lastName = '';
  };

Employee.prototype.setName = function (lastName, firstName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Employee.prototype.setDept = function (dept) {
  this.dept = dept;
};

Employee.prototype.toLog = function(){
  console.log(this.firstName + " " + this.lastName);
  if (this.resp){
    console.log("Responsibility: ", this.resp);
  } else {
    console.log("Expertise: ", this.expertise);
  }
  console.log("Stationed at: " + this.dept.name);
  console.log("Located in: ", this.dept.location);
};

Employee.Clinician = function(expertise){
  this.expertise = expertise;
};

Employee.Clinician.prototype = new Employee();

Employee.Operations = function(resp){
  this.resp = resp;
};

Employee.Operations.prototype = new Employee();

let Hq = new Dept();
Hq.setName("Headquarters");
Hq.setLocation("Nashville, TN");

let lincoln = new Dept.FieldOffice("South Lincoln Clinic", "Lincoln, NE");

let hq00001 = new Employee.Operations('IT');
hq00001.setName('Bloom', 'Judy');
hq00001.setDept(Hq);
hq00001.toLog();

let hq23971 = new Employee.Operations('Facilities');
hq23971.setName('Clarke', 'Andy');
hq23971.setDept(Hq);
hq23971.toLog();

let fo00001 = new Employee.Clinician("Radioscopy");
fo00001.setName("Baker", "Eloise");
fo00001.setDept(lincoln);
fo00001.toLog();

let fo04561 = new Employee.Clinician("Physical Therapy");
fo04561.setName("Jimisonvilletonshire", "Jimmy");
fo04561.setDept(lincoln);
fo04561.toLog();


// 1. Every employee should have a first and last name.
// 1. Every department should have a name.
// 1. Every employee should be assigned to either the `FieldOffice` or `Headquarters` department. This is a `has-a` relationship.
// 1. `Clinician` employees should have a property for their area of medical expertise (e.g. physical therapist, phrenologist, anesthesiologist, etc.)
// 1. `Operations` employees should have a property for their area of responsibility (e.g. IT, revenue, compliance, etc.)
// 1. Every field office should have a unique city.
// 1. Create a minimum of 4 employees - 2 clinicians, and 2 operations - that have been assigned to a specific department.
// 1. Output the following information to the console for each employee.
//     1. Full name
//     1. Department name
//     1. Expertise/responsibility

module.exports = {};
},{"./departments.js":1}],3:[function(require,module,exports){
"use strict";

var Employ = require("./employees.js");
var Depart = require("./departments.js");

// Deborah Harris works as a clinician, in the Baltimore field office, and is a phrenologist.
// Michael Slazinski works in operations, in headquarters, and is responsible for compliance.
// Margaret Johnson works as a clinician, in the Indianapolis field office, and is a physical therapist.

var Business = function(){};

},{"./departments.js":1,"./employees.js":2}]},{},[3]);
