"use server";

import { revalidatePath } from "next/cache";

import { auth, signIn, signOut } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";

export async function updateGuest(formData) {
  const session = await auth();
  if (!session?.user) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) throw new Error("Please provide valid national ID");

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase.from("guests").update(updateData).eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
}

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}
