// Copyright (c) 2023, Joaquin and contributors
// For license information, please see license.txt

frappe.ui.form.on('COURSES', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('COURSES', {
	parent_add: function(frm) {
	frappe.msgprint("Hello this is adding new row");

	 }
});

frappe.ui.form.on('COURSES', {
	parent_remove: function(frm) {
	frappe.msgprint("Hello this is removing row");

	 }
});