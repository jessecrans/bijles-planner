import firebase from "firebase/compat/app"
import { db } from "./firebase"
import { collection, getDocs, addDoc } from "firebase/firestore"

interface Table {
  id: string
  name: string
  description: string
  ownerId: string
  memberIds: string[]
  createdAt: Date
  updatedAt: Date
}

interface User {
  id: string
  email: string
  tables: Table[]
}

export const makeUser = async (user: firebase.User) => {
  const docRef = await addDoc(collection(db, "users"), {
    email: user.email,
    tables: []
  })
  return docRef.id
}

export const makeTable = async (user: firebase.User, name: string, description: string) => {
  const docRef = await addDoc(collection(db, "users/tables"), {
    name,
    description,
    ownerId: user.uid,
    memberIds: [user.uid],
    createdAt: new Date(),
    updatedAt: new Date()
  })
  return docRef.id
}

export const getTables = async (user: firebase.User) => {
  const tablesSnap = await getDocs(collection(db, "users/tables"))
  const tables: Table[] = []
  tablesSnap.forEach(doc => {
    tables.push(doc.data() as Table)
  })
  return tables
}