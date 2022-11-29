import { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteActions, RootState, useThunkDispatch } from "../../store/store";
import { exitNoteDialog } from "../../store/action-creators/action-creators";
import { NoteType } from "../../types/types";


type Props = {
    activePage: string,
    pageTitle: { main: string, optional?: string },
    notesUnavailableClass?: string,
	notesUnavailableInfo: string,
    notesUnavailableIcon: JSX.Element,
    notes: NoteType[]
}

function BaseComponent(props: Props): JSX.Element {
    const {
        notes,
		activePage,
		pageTitle,
		notesUnavailableClass,
		notesUnavailableInfo,
        notesUnavailableIcon
    } = props
    
    const {
        isNoteDialogVisible,
        noteTheme,
    } = useSelector((state: RootState) => state)
    
    const dispatch = useDispatch()
    const thunkDispatch = useThunkDispatch();

    const [notesUnavailable, setNotesUnavailable] = useState(true);
	const [overlayClasses, setOverlayClasses] = useState("");
	const [blurOverlayClasses, setBlurOverlayClasses] = useState("");
	const [deleteConfirmVisible, setDeleteConfirmVisibility] = useState(false);
    const [deleteAmount, setDeleteAmount] = useState("");
    
    const closeNoteDialog = () => {
        thunkDispatch(exitNoteDialog(activePage))
    }
    
    const showNoteDialog = () => {
        dispatch(noteActions.noteDialogIsVisible(true))
    }

	const showDeleteConfirm = (value: boolean) => {
		setDeleteConfirmVisibility(value);
	}

	const syncDeleteAmount = (value: string) => {
		setDeleteAmount(value);
	}

	useLayoutEffect(() => {
		if (notes.length > 0) {
			setNotesUnavailable(false);
		} else {
			setNotesUnavailable(true);
		}
	}, [notes.length]);


	// Visibility of note-dialog overlay
	useEffect(() => {
		if (isNoteDialogVisible) {
			setOverlayClasses("overlay-visible");
		} else {
			setOverlayClasses("");
		}
	}, [isNoteDialogVisible]);


	// Glowing effect behind note-dialog for gradient backgrounds
	useEffect(() => {
		if (isNoteDialogVisible && noteTheme.isGradient) {
			setBlurOverlayClasses(`blur-visible ${noteTheme.colour}`);				
		} else {
			setBlurOverlayClasses("");
		}
	}, [isNoteDialogVisible, noteTheme]);

    return (
        <Fragment>

        </Fragment>
    )
}
