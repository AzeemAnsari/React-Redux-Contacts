import React, { useState, useEffect } from 'react';

import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  makeStyles,
  IconButton,
  Paper,
  Button,
  Box,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import {
  deleteContact,
  selectContact,
  clearContact,
  deleteAllContacts,
} from '../redux/userAction';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  editBtn: {
    color: '#ff9800',
  },
  tableContainer: {
    margin: '1rem 0',
  },
}));

const ContactTable = ({ contacts }) => {
  const classes = useStyles();

  const selectAllContact = useSelector((state) => state.user.selectedContacts);
  const dispatch = useDispatch();

  const [selectAll, setSelectAll] = useState(false);

  const deleteAll = (event) => {
    dispatch(deleteAllContacts());
    setSelectAll(false);
  };

  useEffect(() => {
    if (selectAll) {
      dispatch(selectContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearContact());
    }
  }, [selectAll]);

  return (
    <>
      <Box display="flex">
        {selectAllContact.length > 0 ? (
          <Box>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.addBtn}
              startIcon={<DeleteIcon />}
              onClick={deleteAll}
            >
              Delete All
            </Button>
          </Box>
        ) : null}

        <Box style={{ marginLeft: 'auto' }}>
          <Button
            component={Link}
            to="/contacts/add"
            variant="contained"
            color="primary"
            size="large"
            className={classes.addBtn}
            startIcon={<AddIcon />}
          >
            Add Contact
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  className={classes.checkbox}
                  onClick={() => setSelectAll(!selectAll)}
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>
                  <Checkbox
                    className={classes.checkbox}
                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                    checked={selectAll}
                  />
                </TableCell>
                <TableCell>
                  <Avatar
                    size="45"
                    name={contact.name}
                    round={true}
                    style={{ marginRight: '10px' }}
                  />
                  {contact.name}
                </TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>
                  <div>
                    <IconButton
                      component={Link}
                      to={`/contact/edit/${contact.id}`}
                    >
                      <EditIcon className={classes.editBtn} />
                    </IconButton>
                    <IconButton
                      onClick={() => dispatch(deleteContact(contact.id))}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContactTable;
