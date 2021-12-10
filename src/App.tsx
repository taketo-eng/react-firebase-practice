import React, { useEffect } from "react";
import styles from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./firebase";

const App: React.FC = () => {
    // reduxのstoreの中のuser stateを取得
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const unSub = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(
                    login({
                        uid: authUser.uid,
                        photoUrl: authUser.photoURL,
                        displayName: authUser.displayName,
                    })
                );
            } else {
                dispatch(logout());
            }
        });
        return () => {
            unSub();
        };
    }, [dispatch]);

    return <div className={styles.app}></div>;
};

export default App;
