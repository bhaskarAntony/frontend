import { createAsyncThunk } from "@reduxjs/toolkit";
import ContactApi from "../API/ContactApi";

//create action
export const createContact = createAsyncThunk("contact/create", async (contact) => {
    console.log("new contact=", contact);
    const res = await ContactApi.create(contact) //send recieved data from create.jsx to data to api
    return res.data; // returning the api data
})

//read all action
export const retriveContacts = createAsyncThunk("contact/retrive", async (contact) => {
    const res = await ContactApi.getAll();
    return res.data;

})

//read single contact
export const retriveSingle = createAsyncThunk("contact/retrive/single", async ({id}) =>{
    console.log("contact id = ", id)
})

//update action
export const updateContact = createAsyncThunk("contact/update", async ({id, contact}) => {
    console.log("id= ", id, "contact = ", contact)
})
 //delete action
 export const deleteContact = createAsyncThunk("contact/delete", async ({id}) => {
    console.log("contact id", id)
    await ContactApi.delete(id)
    return {id}
 })