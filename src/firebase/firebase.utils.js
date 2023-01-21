import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBnveGl_sORYLrBRk0b8zeA5_nQnp1lL_k",
  authDomain: "saxa-70c2b.firebaseapp.com",
  projectId: "saxa-70c2b",
  storageBucket: "saxa-70c2b.appspot.com",
  messagingSenderId: "504774705553",
  appId: "1:504774705553:web:42af7c7940445c9b475a30",
  measurementId: "G-KM5S32KWPB",
};

firebase.initializeApp(config);

//exporting required libraries
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Sign in with google utils
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  login_hint: "user@example.com",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    console.log("adding user");
    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objToAdd.forEach((obj) => {
    const docRef = collectionRef.doc();
    batch.set(docRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (querySnapshot) => {
  const transformedCollection = querySnapshot.docs.map((docSnapshot) => {
    const { title, items } = docSnapshot.data();
    const routeName = encodeURI(title.toLowerCase());

    return {
      routeName,
      id: docSnapshot.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};


export const getCurrentUser = () => {
  return new Promise( (resolve,reject) => {
    const unsubscribe = auth.onAuthStateChanged( userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject )
  } )
}

export default firebase;
