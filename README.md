#Webflow Blacklist Checker

Webflow sends a webhook to the instance, with some identifying information of the form -
This triggers an email check for the email of the form.
If the email is there, the form is considered sent.
The database is updated regardless of whether it was sent or not.