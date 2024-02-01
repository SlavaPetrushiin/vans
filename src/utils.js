import { redirect } from "react-router";

export async function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    const response = redirect('/login?message=Yoy must log in first');
    response.body = true
    throw response
  }
  return null
}