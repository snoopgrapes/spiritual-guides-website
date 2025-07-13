import { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./styles.css";

export default function App() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const [user, setUser] = useState(null);

  // Login with Google
  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  // Save entry to Firestore
  const saveEntry = async () => {
    if (!entry.trim() || !auth.currentUser) return;
    await addDoc(collection(db, "entries"), {
      text: entry,
      userId: auth.currentUser.uid,
      date: new Date().toISOString(),
    });
    setEntry("");
  };

  // Load entries
  useEffect(() => {
    if (!auth.currentUser) return;
    const unsubscribe = onSnapshot(collection(db, "entries"), (snapshot) => {
      setEntries(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, [user]);

  // Auth state listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      {!user ? (
        <button onClick={login}>Login with Google</button>
      ) : (
        <>
          <h1>My Journal</h1>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="Write your thoughts..."
          />
          <button onClick={saveEntry}>Save Entry</button>
          <div className="entries">
            {entries.map((entry) => (
              <div key={entry.id} className="entry">
                <p>{entry.text}</p>
                <small>{new Date(entry.date).toLocaleString()}</small>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}