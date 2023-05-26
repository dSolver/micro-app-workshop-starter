import React, { useEffect } from "react";



export default function useNotes(key: string) {

    const [notes, setNotes] = React.useState<string[]>([]);
    useEffect(() => {
        const notes = localStorage.getItem(key);
        if (notes) {
            setNotes(JSON.parse(notes));
        }
    }, [key])

    const addNote = (note: string) => {
        setNotes((_notes) => {
            const next = [..._notes, note]
            localStorage.setItem(key, JSON.stringify(next));
            return next;
        });
    }

    return { notes, addNote };

}