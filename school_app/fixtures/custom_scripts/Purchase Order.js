frappe.ui.form.on('Purchase Order', {
	number_1: function(frm) {
	    get_product(frm.doc.number_1, frm.doc.number_2, frm)
	},
	number_2: function(frm) {
	    get_product(frm.doc.number_1, frm.doc.number_2, frm)
	},


	//This code is for ajax calls. Creating a button that when clicking. Message print whats the value inside the args.
	refresh: function(frm){
		frm.add_custom_button(__("Get Student"), function(){
			console.log("Custom Button")
			frappe.call({
				method: "school_app.api.purchase_order.get_student_details",
				args: {id_number: "-2023-0000005-"},
				callback: function(r){
					console.log(r.message)
					if(r.message) frappe.msgprint(r.message)
				}
			})
		})
		},
	

});

function get_product(num_1, num_2, frm){
    var number_1 = frm.doc.number_1
	var number_2 = frm.doc.number_2
	var result = number_1 * number_2

	frm.set_value("result", result)
}

