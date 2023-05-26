import React from 'react';
import useNotes from '../../hooks/useNotes';
import { Button, Stack, TextField, Typography } from '@mui/material';

export interface NotesProps {
    userId: string
}

export const Notes = ({ userId }: NotesProps) => {

    const { notes, addNote } = useNotes(userId);
    const [newNote, setNewNote] = React.useState('');
    return (
        <Stack>
            <Typography variant='h5'>Notes for {userId}</Typography>
            <Stack>
                {
                    notes.map((note, index) => (
                        <Typography key={index}>{note}</Typography>
                    ))
                }
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (newNote.trim() === '') return;

                    addNote(newNote);
                    setNewNote('');
                }}>
                    <TextField
                        label="Add note"
                        variant="outlined"
                        fullWidth={true}
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)} />
                    <Button type="submit">Add Note</Button>
                </form>
            </Stack>
        </Stack>
    )
}