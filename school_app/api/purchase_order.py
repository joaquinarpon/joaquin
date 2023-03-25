import frappe
import json

@frappe.whitelist()
def get_student_details(id_number):
    return frappe.db.get_value(
        "Students Details",
        {"name": id_number},
        "first_name"
    )

@frappe.whitelist()
def get_all_student_details():
    return frappe.db.get_list("Subject")


@frappe.whitelist()
def create_subject():
    try:
        data = json.loads(frappe.request.data)
        new_doc = frappe.new_doc("Subject")
        new_doc.subject_code = data["subject_code"]
        new_doc.subject_name = data["subject_name"]
        new_doc.save()
        return data
    except:
        frappe.log_error(frappe.get_traceback(), "subject failed")
    return {
        "message" : "Error"
    }


    