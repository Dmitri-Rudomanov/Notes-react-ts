import { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
    activePage: string,
    pageTitle: { main: string, optional?: string },
    notesUnavailableClass?: string,
	notesUnavailableInfo: string,
	notesUnavailableIcon: JSX.Element,
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
        isNoteDialogeVisible,
        noteTheme,
    } = useSelector((state: RootState) => state)
    
    const dispatch = useDispatch()
    const thunkDispatch = useThunkDispatch();

    const [notesUnavailable, setNotesUnavailable] = useState(true);
	const [overlayClasses, setOverlayClasses] = useState("");
	const [blurOverlayClasses, setBlurOverlayClasses] = useState("");
	const [deleteConfirmVisible, setDeleteConfirmVisibility] = useState(false);
    const [deleteAmount, setDeleteAmount] = useState("");
    
    
}
