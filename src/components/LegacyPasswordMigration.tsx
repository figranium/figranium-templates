"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function LegacyPasswordMigration() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState(params.get("email") ?? "");
  const [oldPassword, setOldPassword] = useState("");
  const [error, setError] = useState("");
  const [verificationPending, setVerificationPending] = useState(false);
  const [pending, setPending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setPending(true); setError("");
    try {
      const proof = await fetch("/api/auth/legacy/verify", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password: oldPassword }) });
      if (!proof.ok) throw new Error("Your previous password was not recognised.");
      const { error: signUpError } = await authClient.signUp.email({ email, password: oldPassword, name: email.split("@")[0] });
      if (signUpError) throw new Error(signUpError.message);
      const linked = await fetch("/api/auth/legacy/associate", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ oldPassword }) });
      if (linked.status === 401) { setVerificationPending(true); return; }
      if (!linked.ok) throw new Error((await linked.json()).error || "Could not link your existing account.");
      router.replace("/account/settings"); router.refresh();
    } catch (reason) { setError(reason instanceof Error ? reason.message : "Unable to complete account setup."); }
    finally { setPending(false); }
  }

  if (verificationPending) return <div className="space-y-4 rounded-2xl border border-border bg-card p-8 shadow-2xl"><h1 className="text-2xl font-semibold">Check your email</h1><p className="text-sm text-muted-foreground">We created your Neon Auth account. Enter the verification code sent to your email, sign in, then return here and enter your password once more to link your existing profile.</p></div>;
  return <form onSubmit={submit} className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-2xl">
    <div><h1 className="text-2xl font-semibold">Continue with your password</h1><p className="mt-2 text-sm text-muted-foreground">Confirm your existing password to securely establish your Neon Auth account.</p></div>
    <label className="block text-sm">Email<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2" /></label>
    <label className="block text-sm">Password<input required minLength={8} type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2" /></label>
    {error && <p className="text-sm text-destructive">{error}</p>}
    <button disabled={pending} className="w-full rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground disabled:opacity-60">{pending ? "Setting up…" : "Set up account"}</button>
  </form>;
}
