import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, TextField } from "@mui/material";
import { Form } from "react-router-dom";
function Addbtn({open, onClose}){
    return(
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>
                    <Typography variant="subheading">
                        Add Book
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Form>
                        <Typography variant="body">
                            <TextField
                                id='name'
                                name="bookname"
                                label="Book Name"
                                variant="standard"
                               
                            />
                        </Typography>
                    </Form>
                </DialogContent>

            </Dialog>
        </>
    );
}
export default Addbtn;

// //1.query to match user info to bookdata.js info filter.map
// //2. oce matched fill card with related info and add to currently reading
// //3 progress bar + formula for calculating


// //to learn createbrowserrouter smstg


