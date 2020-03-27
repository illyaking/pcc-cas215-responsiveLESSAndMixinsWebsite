/*the lines below are to prevent false errors from jslint or eslint in Brackets*/

/*eslint-disable no-unused-vars*/
/*global $, document, alert, window*/
/*jshint browser: true, unused: false, no-unused-vars: true*/
/*jslint devel: true, node: true, vars: true*/
"use strict"; // required by jslint

/*
File Name: script.js
Date: 11/18/18
Programmer: Illya King
*/

// The line below is to test your link to the .js file. Please comment it out when it works.
//alert("the link to the .js file is correct!");

// The line below is to test your link to the jquery.min.js file. Please comment it out when it works.
//if (window.jQuery) {alert("the link to the jQuery file is correct!"); }

// Enter your jQuery code below this line (put a blank line first).
$(document).ready(function() {

    //alert("jQuery Code is running");
    
    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").show();
    
    $(".cross").on("click", function() {
        $(".menu").slideToggle("slow");
        $(".cross").hide();
        $(".hamburger").show();
    });

    $(".hamburger").on("click", function() {
        $(".menu").slideToggle("slow");
        $(".hamburger").hide();
        $(".cross").show();
    });
    
    $(window).resize(function() {
        if(window.innerWidth <= 481) {
            $("nav").addClass("menu");
            $(".menu").hide();
        }
        
        else {
            $("nav").show();
        }
    });
    
});