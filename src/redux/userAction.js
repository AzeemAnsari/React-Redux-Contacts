import {
  NEW_CONTACT,
  EDIT_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACTS,
} from './userTypes';

export const addContact = (contact) => ({
  type: NEW_CONTACT,
  payload: contact,
});

export const editContact = (id) => ({
  type: EDIT_CONTACT,
  payload: id,
});

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const selectContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
});

export const clearContact = () => ({
  type: CLEAR_CONTACT,
});

export const deleteAllContacts = () => ({
  type: DELETE_SELECTED_CONTACTS,
});
