chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
	
		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		
		console.log(window.location.toString());
		// ----------------------------------------------------------
		jQuery(".sectionDiv:contains('Code Install Description')").hide()
		jQuery("#sect_s5 > tbody > tr:nth-child(9)").hide()
		jQuery("#sect_s5 > tbody > tr:nth-child(10)").hide()
		jQuery("#sect_s5 > tbody > tr:nth-child(11)").hide()
		jQuery("#sect_s5 > tbody > tr:nth-child(12)").hide()
		jQuery("#navTop").hide()
		jQuery("#sect_s5 > tbody > tr:nth-child(1)").hide()
		jQuery("#sect_s5 > tbody > tr:nth-child(2)").hide()
		jQuery("#sect_s5 > tbody > tr:nth-child(3)").hide()
		jQuery("#sect_s5 > tbody > tr:nth-child(4)").hide()
		jQuery("#sect_s5 > tbody > tr:nth-child(5)").hide()
		jQuery("#sect_s5 > tbody > tr:nth-child(6)").hide()
		jQuery("p:contains('Code installs cover the implementation of any codes')").hide()
		jQuery("p:contains('• Images should be	good-resolution ')").hide()
		

		// establish buttons
		var copyUsernameButton = jQuery(`<a class='submitButton qb-us enhanced-link' id='code_username' >Copy Username</a>`)
		var copyPasswordButton = jQuery(`<a class='submitButton qb-us enhanced-link' id='code_password' >Copy Password</a>`)
		var usernameField = jQuery(".formRow:contains('Web Username')").children()[1]
		var passwordField = jQuery(".formRow:contains('Web Password')").children()[1]
		copyUsernameButton.insertAfter(usernameField)
		copyPasswordButton.insertAfter(passwordField)

		jQuery(copyUsernameButton).on('click',function(){
			var viewfield = jQuery(".formRow:contains('Web Username')").find('input')[0]
			var editfield = jQuery(".formRow:contains('Web Username')").find('input')[1]
			editfield == undefined ? viewfield.select() : editfield.select()
			jQuery().select() // Select username field
			document.execCommand("copy")
			jQuery('.temp_user_toast').remove() // clear previous toasts
			jQuery(copyUsernameButton).after("<a class='temp_user_toast' >Copied Username</a>") // Spawn toast
			setTimeout(function(){ $(".temp_user_toast").remove() }, 2000); // Remove toast after 2 seconds
		})
		jQuery("#code_password").on('click',function(){
			var viewfield = jQuery(".formRow:contains('Web Password')").find('input')[0]
			var editfield = jQuery(".formRow:contains('Web Password')").find('input')[1]
			editfield == undefined ? viewfield.select() : editfield.select()
			document.execCommand("copy")
			jQuery('.temp_pass_toast').remove() // clear previous toasts
			jQuery("#code_password").after("<a class='temp_pass_toast' >Copied Password</a>") // Spawn toast
			setTimeout(function(){ jQuery(".temp_pass_toast").remove() }, 2000); // Remove toast after 2 seconds
		})




	}
	}, 10);
});

