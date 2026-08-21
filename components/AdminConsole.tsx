"use client";

import { useState } from "react";
import {
  cores as initialCores,
  impactStats as initialImpactStats,
  news as initialNews,
  publications as initialPublications,
  type CoreItem,
  type NewsItem,
  type Publication,
} from "@/lib/content";

const TABS = ["News", "Program", "Publications"] as const;
type Tab = (typeof TABS)[number];

const inputClass =
  "w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-crimson";
const labelClass = "mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted";

function Card({ children }: { children: React.ReactNode }) {
  return <div className="border border-line bg-paper p-6">{children}</div>;
}

function FieldsGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">{children}</div>;
}

function AddButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2.5 rounded-sm bg-crimson px-6 py-3 text-[12.5px] font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5 hover:bg-crimson-deep"
    >
      {children}
    </button>
  );
}

function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="font-mono text-[11px] uppercase tracking-wide text-crimson transition-colors hover:text-crimson-deep"
    >
      Delete
    </button>
  );
}

function NewsEditor({
  items,
  onChange,
}: {
  items: NewsItem[];
  onChange: (items: NewsItem[]) => void;
}) {
  function update(i: number, field: keyof NewsItem, value: string) {
    onChange(items.map((item, idx) => (idx === i ? { ...item, [field]: value } : item)));
  }
  function remove(i: number) {
    onChange(items.filter((_, idx) => idx !== i));
  }
  function add() {
    onChange([{ tag: "News", title: "", body: "" }, ...items]);
  }

  return (
    <div className="flex flex-col gap-6">
      <AddButton onClick={add}>+ Add News Item</AddButton>
      {items.map((item, i) => (
        <Card key={i}>
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wide text-crimson">
              Item {i + 1}
            </span>
            <DeleteButton onClick={() => remove(i)} />
          </div>
          <FieldsGrid>
            <label>
              <span className={labelClass}>Tag</span>
              <input
                className={inputClass}
                value={item.tag}
                onChange={(e) => update(i, "tag", e.target.value)}
              />
            </label>
            <label>
              <span className={labelClass}>Title</span>
              <input
                className={inputClass}
                value={item.title}
                onChange={(e) => update(i, "title", e.target.value)}
              />
            </label>
            <label className="sm:col-span-2">
              <span className={labelClass}>Body</span>
              <textarea
                rows={2}
                className={`${inputClass} resize-none`}
                value={item.body}
                onChange={(e) => update(i, "body", e.target.value)}
              />
            </label>
          </FieldsGrid>
        </Card>
      ))}
    </div>
  );
}

function ProgramEditor({
  cores,
  onCoresChange,
  impactStats,
  onImpactStatsChange,
}: {
  cores: CoreItem[];
  onCoresChange: (cores: CoreItem[]) => void;
  impactStats: { num: string; label: string }[];
  onImpactStatsChange: (stats: { num: string; label: string }[]) => void;
}) {
  function updateCore(i: number, field: "body" | "email", value: string) {
    onCoresChange(cores.map((c, idx) => (idx === i ? { ...c, [field]: value } : c)));
  }
  function updateStat(i: number, field: "num" | "label", value: string) {
    onImpactStatsChange(
      impactStats.map((s, idx) => (idx === i ? { ...s, [field]: value } : s))
    );
  }
  function removeStat(i: number) {
    onImpactStatsChange(impactStats.filter((_, idx) => idx !== i));
  }
  function addStat() {
    onImpactStatsChange([{ num: "", label: "" }, ...impactStats]);
  }

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h3 className="mb-4 font-fraunces text-[19px] font-semibold text-navy">Cores</h3>
        <p className="mb-5 text-[13px] text-muted">
          Core names and routes are fixed by the site structure — only the description and
          contact email are editable here.
        </p>
        <div className="flex flex-col gap-6">
          {cores.map((c, i) => (
            <Card key={c.id}>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-wide text-crimson">
                {c.code} — {c.title}
              </div>
              <FieldsGrid>
                <label className="sm:col-span-2">
                  <span className={labelClass}>Description</span>
                  <textarea
                    rows={2}
                    className={`${inputClass} resize-none`}
                    value={c.body}
                    onChange={(e) => updateCore(i, "body", e.target.value)}
                  />
                </label>
                <label>
                  <span className={labelClass}>Contact Email</span>
                  <input
                    className={inputClass}
                    value={c.email}
                    onChange={(e) => updateCore(i, "email", e.target.value)}
                  />
                </label>
              </FieldsGrid>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 font-fraunces text-[19px] font-semibold text-navy">Impact Stats</h3>
        <div className="mb-5">
          <AddButton onClick={addStat}>+ Add Stat</AddButton>
        </div>
        <div className="flex flex-col gap-6">
          {impactStats.map((s, i) => (
            <Card key={i}>
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wide text-crimson">
                  Stat {i + 1}
                </span>
                <DeleteButton onClick={() => removeStat(i)} />
              </div>
              <FieldsGrid>
                <label>
                  <span className={labelClass}>Number</span>
                  <input
                    className={inputClass}
                    value={s.num}
                    onChange={(e) => updateStat(i, "num", e.target.value)}
                  />
                </label>
                <label>
                  <span className={labelClass}>Label</span>
                  <input
                    className={inputClass}
                    value={s.label}
                    onChange={(e) => updateStat(i, "label", e.target.value)}
                  />
                </label>
              </FieldsGrid>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function PublicationsEditor({
  items,
  onChange,
}: {
  items: Publication[];
  onChange: (items: Publication[]) => void;
}) {
  const [query, setQuery] = useState("");

  function update(i: number, field: keyof Publication, value: string) {
    const next = [...items];
    const item = { ...next[i] };
    if (field === "year") {
      item.year = Number(value) || item.year;
    } else {
      (item as unknown as Record<string, string>)[field] = value;
    }
    next[i] = item;
    onChange(next);
  }
  function remove(i: number) {
    onChange(items.filter((_, idx) => idx !== i));
  }
  function add() {
    onChange([
      { year: new Date().getFullYear(), category: "", title: "", citation: "", url: "" },
      ...items,
    ]);
  }

  const filtered = query.trim()
    ? items
        .map((p, i) => ({ p, i }))
        .filter(
          ({ p }) =>
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        )
    : items.map((p, i) => ({ p, i })).slice(0, 20);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <AddButton onClick={add}>+ Add Publication</AddButton>
        <input
          type="search"
          placeholder="Search by title or category…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-80 border-0 border-b border-line bg-transparent px-0 py-2 text-[14px] text-ink outline-none focus:border-crimson"
        />
      </div>
      <p className="text-[12.5px] text-muted">
        {query.trim()
          ? `${filtered.length} matching ${filtered.length === 1 ? "result" : "results"}`
          : `Showing the first 20 of ${items.length} — search to find a specific one.`}
      </p>
      <div className="flex flex-col gap-6">
        {filtered.map(({ p, i }) => (
          <Card key={i}>
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wide text-crimson">
                {p.year || "—"}
              </span>
              <DeleteButton onClick={() => remove(i)} />
            </div>
            <FieldsGrid>
              <label>
                <span className={labelClass}>Year</span>
                <input
                  className={inputClass}
                  value={p.year}
                  onChange={(e) => update(i, "year", e.target.value)}
                />
              </label>
              <label>
                <span className={labelClass}>Category</span>
                <input
                  className={inputClass}
                  value={p.category}
                  onChange={(e) => update(i, "category", e.target.value)}
                />
              </label>
              <label className="sm:col-span-2">
                <span className={labelClass}>Title</span>
                <input
                  className={inputClass}
                  value={p.title}
                  onChange={(e) => update(i, "title", e.target.value)}
                />
              </label>
              <label className="sm:col-span-2">
                <span className={labelClass}>Citation</span>
                <textarea
                  rows={2}
                  className={`${inputClass} resize-none`}
                  value={p.citation}
                  onChange={(e) => update(i, "citation", e.target.value)}
                />
              </label>
              <label className="sm:col-span-2">
                <span className={labelClass}>URL</span>
                <input
                  className={inputClass}
                  value={p.url}
                  onChange={(e) => update(i, "url", e.target.value)}
                />
              </label>
            </FieldsGrid>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function AdminConsole() {
  const [tab, setTab] = useState<Tab>("News");
  const [newsItems, setNewsItems] = useState(initialNews);
  const [coreItems, setCoreItems] = useState(initialCores);
  const [statItems, setStatItems] = useState(initialImpactStats);
  const [pubItems, setPubItems] = useState(initialPublications);
  const [savedMessage, setSavedMessage] = useState("");

  async function handleLogout() {
    await fetch("/api/admin-logout", { method: "POST" });
    // Hard navigation avoids the same stale-router-cache issue as on the login page.
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.href = "/admin-console/login";
  }

  function handleSave() {
    setSavedMessage(
      "Changes are kept in this browser tab only — this console isn't wired to a live data source yet, so nothing here is visible to site visitors and it resets on reload."
    );
    window.setTimeout(() => setSavedMessage(""), 6000);
  }

  return (
    <div className="min-h-screen bg-paper-2">
      <div className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-275 items-center justify-between px-6 py-6 md:px-10">
          <div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-crimson">
              RCMI Admin Console
            </div>
            <h1 className="mt-1 font-fraunces text-[22px] font-semibold text-navy">
              Content Editor
            </h1>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="font-mono text-[12px] uppercase tracking-wide text-muted transition-colors hover:text-crimson"
          >
            Log Out
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-275 px-6 py-10 md:px-10">
        <div className="mb-8 border border-line bg-[#fdf6d8] p-4 text-[13px] leading-relaxed text-navy">
          This console edits a local, in-session copy of the site&apos;s content for review purposes.
          Nothing here is saved permanently or shown to site visitors yet.
        </div>

        <div className="mb-8 flex gap-2 border-b border-line">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`px-5 py-3 font-mono text-[12px] uppercase tracking-wide transition-colors ${
                tab === t
                  ? "border-b-2 border-crimson text-crimson"
                  : "text-muted hover:text-navy"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "News" && <NewsEditor items={newsItems} onChange={setNewsItems} />}
        {tab === "Program" && (
          <ProgramEditor
            cores={coreItems}
            onCoresChange={setCoreItems}
            impactStats={statItems}
            onImpactStatsChange={setStatItems}
          />
        )}
        {tab === "Publications" && (
          <PublicationsEditor items={pubItems} onChange={setPubItems} />
        )}

        <div className="mt-10 flex items-center gap-5 border-t border-line pt-8">
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2.5 rounded-sm bg-crimson px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5 hover:bg-crimson-deep"
          >
            Save Changes
          </button>
          {savedMessage && <p className="max-w-[46ch] text-[12.5px] text-muted">{savedMessage}</p>}
        </div>
      </div>
    </div>
  );
}
