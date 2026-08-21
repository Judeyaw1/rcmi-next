"use client";

import { useState, type FormEvent } from "react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      // Hard navigation: router.push() served a stale cached RSC payload for
      // /admin-console from before the auth cookie was set, bouncing back to /login.
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.href = "/admin-console";
    } else {
      setLoading(false);
      setError("Incorrect password.");
    }
  }

  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-navy-deep px-6 text-white">
      <div className="w-full max-w-95">
        <div className="mb-8 flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-[#F0B7C0] before:inline-block before:h-px before:w-5 before:bg-[#F0B7C0] before:content-['']">
          Admin Console
        </div>
        <h1 className="mb-8 font-fraunces text-[clamp(28px,3vw,36px)] font-semibold text-white">
          Sign in
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="block">
            <span className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-widest text-white/60">
              Password
            </span>
            <input
              type="password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-[15px] text-white outline-none transition-colors focus:border-crimson"
            />
          </label>
          {error && <p className="text-[13px] text-crimson">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-crimson px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5 hover:bg-crimson-deep disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </section>
  );
}
