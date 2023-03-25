import frappe
import frappe import utils

def create_subject(doc, method):
    new_doc = frappe.new_doc("Subject") # New document inside Subject doctype
    new_doc.subject_code = doc.item_code # Value of you document
    new_doc.subject_name = doc.item_name # Value of your document
    new_doc.save() # Saving
 
