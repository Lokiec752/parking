import "server-only";
import { jwtVerify, SignJWT } from "jose";
import { SessionPayload } from "./definitions";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Error decrypting session:", error);
  }
}

export async function createSession(userId: number) {
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60);
  const session = await encrypt({ id: userId, expiresAt });
  const cookiesRes = await cookies();
  cookiesRes.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}