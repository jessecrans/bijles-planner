"use client";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, User } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { useState } from "react";

export default function Home() {
  return (
    <main className="p-4">
      <h1
        className="text-4xl font-light text-center uppercase"
      >
        Bijles Planner
      </h1>
    </main>
  )
}
